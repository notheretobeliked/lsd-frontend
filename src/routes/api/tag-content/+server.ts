
import type { HomepageData } from '$lib/utilities/types'
import { error, json } from '@sveltejs/kit'
import postsByTag from '$lib/graphql/query/postsByTag.graphql?raw'
import { checkResponse, graphqlQuery } from '$lib/utilities/graphql'

import type { RequestEvent } from "./$types";
import type { RequestHandler } from './$types';


export const GET = (async ({ url }: RequestEvent) => {
	const slug : string = url.searchParams.get('slug') ?? '';
  
	try {
		const response = await graphqlQuery(postsByTag, { tag: `${slug}` })
		checkResponse(response)

		const { data }: { data: HomepageData } = await response.json()
		if (!data) {
			throw error(502, 'Unexpected JSON repsonse')
		}

		const { posts: dataPosts } = data
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

    return json(posts)
		
	} catch (err: unknown) {
		const httpError = err as { status: number; message: string }
		if (httpError.message) {
			throw error(httpError.status ?? 500, httpError.message)
		}
		throw error(500, err as string)
	}
})satisfies RequestHandler
