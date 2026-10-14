export const prerender = true

import type { PageServerLoad } from './$types'
import type { PostData, EmbedType, tag } from '$lib/utilities/types'
import postQuery from '$lib/graphql/query/post.graphql?raw'
import { checkResponse, graphqlQuery } from '$lib/utilities/graphql'
import { error } from '@sveltejs/kit'

function replaceUrl(content: string | null): string | null {
	if (typeof content !== 'string') {
		return content;
	}
	const oldUrl = 'lsd-stg.villa.arson.org/app/uploads';
	const newUrl = 'villa-arson-assets.ams3.digitaloceanspaces.com/lsd/app/uploads';
	return content.replace(new RegExp(oldUrl, 'g'), newUrl);
}

function getVimeoId(url: string): string | null {
	const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
	return match ? match[1] : null
}

// WordPress stores non-ASCII slugs percent-encoded in lowercase, and WPGraphQL only
// resolves the URI in that exact form
function encodeSlug(slug: string): string {
	return encodeURIComponent(slug).replace(/%[0-9A-F]{2}/g, (s) => s.toLowerCase())
}

export const load = (async ({ params }) => {
	const { slug } = params

	try {
		const response = await graphqlQuery(postQuery, { uri: `/articles/${encodeSlug(slug)}` })
		checkResponse(response)

		const { data }: { data: PostData } = await response.json()

		if (!data) {
			throw error(502, 'Unexpected JSON repsonse')
		}

		if (!data.post) {
			throw error(404, 'Article not found')
		}

		const {
			content,
			title,
			seo: { metaDesc: description }
		} = data.post

		const replacedContent = replaceUrl(content) // Replace in content

		const { author, pdf } = data.post.infos
		let { embed } = data.post.infos
		const tags = data.post.tags.nodes.map((node: tag) => {
			return {
				name: node.name,
				slug: node.slug
			}
		})
		const categories = data.post.categories.nodes.map((cat: tag) => {
			return {
				name: cat.name,
				slug: cat.slug
			}
		})

		let embedType: EmbedType = null

		if (embed) {
			embedType =
				embed && embed.trim() !== '' && embed.indexOf('soundcloud') > -1 ? 'soundcloud' : 'vimeo'
		}
		embedType === 'vimeo' && (embed = getVimeoId(embed))

		let replacedPdf = null

		if (pdf) {
			replacedPdf = {
				fileSize: pdf.node.fileSize,
				mediaItemUrl: replaceUrl(pdf.node.mediaItemUrl), // Replace in PDF URL
				mediaType: pdf.node.mediaType,
				mimeType: pdf.node.mimeType,
				title: pdf.node.title
			}
		}

		const returnObject = {
			content: content,
			description,
			title,
			slug,
			tags,
			embed,
			author,
			embedType,
			categories,
			pdf: replacedPdf
		}
		return returnObject
	} catch (err: unknown) {
		// Errors thrown with error() above already carry a status and body, so pass them on
		if (err && typeof err === 'object' && 'status' in err && 'body' in err) throw err
		const httpError = err as { status: number; message: string }
		if (httpError.message) {
			throw error(httpError.status ?? 500, httpError.message)
		}
		throw error(500, String(err))
	}
}) satisfies PageServerLoad
