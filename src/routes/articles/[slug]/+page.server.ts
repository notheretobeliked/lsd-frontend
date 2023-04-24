import type { PostsQuery } from '$lib/generated/graphql'
import postsQuery from '$lib/graphql/query/posts.graphql?raw'
import { checkResponse, graphqlQuery } from '$lib/utilities/graphql'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async function load({ url }) {
	try {
		const response = await graphqlQuery(postsQuery, { endCursor: '', postsPerPage: 20 })
		checkResponse(response)

		const { data }: { data: PostsQuery } = await response.json()
		if (!data) {
			throw error(502, 'Unexpected JSON repsonse')
		}

		const { generalSettings, posts: dataPosts } = data
		const posts = dataPosts.edges.map((edge) => {
			const { node } = edge
			const { uri, date, title } = node
			const tags = node.tags.edges.map((edge) => { return { 
        name : edge.node.name,
        slug : edge.node.slug
      }
      })
			const author = node.infos.author
			return {
				date,
				uri,
				title,
				tags,
        author
			}
		})

		const { title } = generalSettings

		return { title, posts }
	} catch (err: unknown) {
		const httpError = err as { status: number; message: string }
		if (httpError.message) {
			throw error(httpError.status ?? 500, httpError.message)
		}
		throw error(500, err as string)
	}
}
