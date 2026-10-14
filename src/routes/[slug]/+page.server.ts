export const prerender = true

import type { EntryGenerator, PageServerLoad } from './$types'
import type { HomepageData, PageData } from '$lib/utilities/types'
import postsQuery from '$lib/graphql/query/posts.graphql?raw'
import pageQuery from '$lib/graphql/query/page.graphql?raw'
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


// The WordPress pages this route renders, so they are prerendered even if nothing links to them
export const entries = (() => [
	{ slug: 'a-propos' },
	{ slug: 'edition' },
	{ slug: 'credits' }
]) satisfies EntryGenerator

export const load = (async ({ params }) => {

	const { slug } = params
	switch (slug) {
		case 'articles':
			try {
				const response = await graphqlQuery(postsQuery, { endCursor: '', postsPerPage: 20 })
				checkResponse(response)

				const { data }: { data: HomepageData } = await response.json()
				if (!data) {
					throw error(502, 'Unexpected JSON repsonse')
				}

				const { generalSettings, posts: dataPosts } = data
				const posts = dataPosts.edges.map((edge) => {
					const { node } = edge
					const { uri, date, title } = node
					const tags = node.tags.edges.map((edge) => {
						return {
							name: edge.node.name,
							slug: edge.node.slug
						}
					})
					const author = node.infos.author

					return {
						date,
						uri,
						title,
						tags,
						author,
						slug
					}
				})

				const { title } = generalSettings

				return { title, posts }
			} catch (err: unknown) {
				// Errors thrown with error() above already carry a status and body, so pass them on
				if (err && typeof err === 'object' && 'status' in err && 'body' in err) throw err
				const httpError = err as { status: number; message: string }
				if (httpError.message) {
					throw error(httpError.status ?? 500, httpError.message)
				}
				throw error(500, String(err))
			}
			break
		case 'edition':
		case 'credits':
		case 'a-propos':
			try {
				const response = await graphqlQuery(pageQuery, { uri: slug })
				checkResponse(response)

				const { data }: { data: PageData } = await response.json()
				if (!data) {
					throw error(502, 'Unexpected JSON repsonse')
				}

				const {
					content,
					title,
					seo: { metaDesc: description }
				} = data.page

				return {
					content: content.trim(),
					description,
					title,
					slug
				}
			} catch (err: unknown) {
				// Errors thrown with error() above already carry a status and body, so pass them on
				if (err && typeof err === 'object' && 'status' in err && 'body' in err) throw err
				const httpError = err as { status: number; message: string }
				if (httpError.message) {
					throw error(httpError.status ?? 500, httpError.message)
				}
				throw error(500, String(err))
			}
			break
		default:
			throw error(404, 'Not found')
	}
}) satisfies PageServerLoad
