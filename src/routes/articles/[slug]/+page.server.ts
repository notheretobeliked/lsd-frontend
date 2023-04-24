import type { PageServerLoad } from './$types'
import type { PostData } from '$lib/utilities/types'
import postQuery from '$lib/graphql/query/post.graphql?raw'
import { checkResponse, graphqlQuery } from '$lib/utilities/graphql'
import { error } from '@sveltejs/kit'

export const load = (async ({ params }) => {
	const { slug } = params
			try {
				const response = await graphqlQuery(postQuery, { uri: `/articles/${slug}` })
				checkResponse(response)

				const { data }: { data: PostData } = await response.json()
				console.log(data)
				if (!data) {
					throw error(502, 'Unexpected JSON repsonse')
				}

				const {
					content,
					title,
					seo: { description }
				} = data.post

				return {
					content: content,
					description,
					title,
					slug
				}
			} catch (err: unknown) {
				const httpError = err as { status: number; message: string }
				if (httpError.message) {
					throw error(httpError.status ?? 500, httpError.message)
				}
				throw error(500, err as string)
			}
}) satisfies PageServerLoad
