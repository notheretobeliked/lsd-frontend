import type { PageServerLoad } from './$types'
import type { PostData, EmbedType, tag } from '$lib/utilities/types'
import postQuery from '$lib/graphql/query/post.graphql?raw'
import { checkResponse, graphqlQuery } from '$lib/utilities/graphql'
import { error } from '@sveltejs/kit'

function getVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? match[1] : null;
}

export const load = (async ({ params }) => {
	const { slug } = params
	
			try {
				const response = await graphqlQuery(postQuery, { uri: `/articles/${slug}` })
				checkResponse(response)

				const { data }: { data: PostData } = await response.json()
				
				if (!data || !data.post ) {
					throw error(502, 'Unexpected JSON repsonse')
				}
				

				const {
					content,
					title,
					seo: { description },
				} = data.post

				const {author } = data.post.infos
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

				let embedType:EmbedType = null

				if (embed) {
					embedType = embed && embed.trim() !== '' && embed.indexOf('soundcloud') > -1 ? 'soundcloud' : 'vimeo';
				}
				embedType === 'vimeo' && (embed = getVimeoId(embed))
				
				
				return {
					content: content,
					description,
					title,
					slug,
					tags,
					embed,
					author,
					embedType,
					categories
				}
			} catch (err: unknown) {
				const httpError = err as { status: number; message: string }
				if (httpError.message) {
					throw error(httpError.status ?? 500, httpError.message)
				}
				throw error(500, err as string)
			}
}) satisfies PageServerLoad
