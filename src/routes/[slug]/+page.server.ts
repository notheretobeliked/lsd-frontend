import type { PageServerLoad } from './$types'
import type { HomepageData, PageData } from '$lib/utilities/types'
import postsQuery from '$lib/graphql/query/posts.graphql?raw'
import pageQuery from '$lib/graphql/query/page.graphql?raw'
import { checkResponse, graphqlQuery } from '$lib/utilities/graphql'
import { error } from '@sveltejs/kit'

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
				const httpError = err as { status: number; message: string }
				if (httpError.message) {
					throw error(httpError.status ?? 500, httpError.message)
				}
				throw error(500, err as string)
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
					seo: { description }
				} = data.page

				return {
					content: content.trim(),
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
			break
	}
}) satisfies PageServerLoad
