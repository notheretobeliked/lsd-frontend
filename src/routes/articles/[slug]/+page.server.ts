import type { PageServerLoad } from './$types'
import type { PostData, EmbedType } from '$lib/utilities/types'
import postQuery from '$lib/graphql/query/post.graphql?raw'
import { checkResponse, graphqlQuery } from '$lib/utilities/graphql'
import { error } from '@sveltejs/kit'

function getVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? match[1] : null;
}

export const load = (async ({ params }) => {
	const { slug } = params
	console.log(slug)
			try {
				const response = await graphqlQuery(postQuery, { uri: `/articles/${slug}` })
				checkResponse(response)

				const { data }: { data: PostData } = await response.json()
				console.log(data)
				if (!data || !data.post ) {
					throw error(502, 'Unexpected JSON repsonse')
				}
				console.log(data)

				const {
					content,
					title,
					seo: { description },
				} = data.post

				const {author } = data.post.infos
				let {embed } = data.post.infos
				const tags = data.post.tags.edges.map((edge) => {
					return {
						name: edge.node.name,
						slug: edge.node.slug
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
					embedType
				}
			} catch (err: unknown) {
				const httpError = err as { status: number; message: string }
				if (httpError.message) {
					throw error(httpError.status ?? 500, httpError.message)
				}
				throw error(500, err as string)
			}
}) satisfies PageServerLoad
