import type { PageServerLoad } from './$types'
import type { HomepageData, tag } from '$lib/utilities/types'
import postsQuery from '$lib/graphql/query/posts.graphql?raw'
import { checkResponse, graphqlQuery } from '$lib/utilities/graphql'
import { error } from '@sveltejs/kit'

export const load = (async ({ params }) => {
  const {slug} = params
	try {
		const response = await graphqlQuery(postsQuery, { endCursor: '', postsPerPage: 20 })
		checkResponse(response)

		const { data }: { data: HomepageData } = await response.json()
		if (!data) {
			throw error(502, 'Unexpected JSON repsonse')
		}

		const { generalSettings, posts: dataPosts } = data

    const alltags: tag[] = Object.values(
      dataPosts.edges
        .map((edge) => edge.node.tags.edges.map((edge) => ({
          name: edge.node.name,
          slug: edge.node.slug,
        })))
        .flat()
        .reduce((tags: { [key: string]: tag }, tag: tag) => {
          const key = JSON.stringify(tag);
          if (!tags[key]) {
            tags[key] = tag;
          }
          return tags;
        }, {})
    ).sort((a, b) => a.name.localeCompare(b.name));
    
    
    

    const posts = dataPosts.edges.map((edge) => {
			const { node } = edge
			const { uri, date, title } = node
      const tagsearch = node.tags.edges.map((edge) => { return edge.node.slug })
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
				slug,
        tagsearch,
			}
		})

		const { title } = generalSettings

		return { title, posts, alltags }
	} catch (err: unknown) {
		const httpError = err as { status: number; message: string }
		if (httpError.message) {
			throw error(httpError.status ?? 500, httpError.message)
		}
		throw error(500, err as string)
	}
}) satisfies PageServerLoad
