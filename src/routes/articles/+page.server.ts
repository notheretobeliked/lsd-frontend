import type { PageServerLoad } from './$types'
import type { HomepageData, tag, HomePageNode } from '$lib/utilities/types'
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
	
		const { generalSettings } = data

		const dataPosts: HomePageNode[] = data.posts.nodes;


    const tags: tag[] = Object.values(
      dataPosts.map((node) => node.tags.nodes.map((node) => ({
          name: node.name,
          slug: node.slug,
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
    
		const alltags: tag[] = Object.values(
      dataPosts.map((node) => node.categories.nodes.map((node) => ({
          name: node.name,
          slug: node.slug,
        })))
        .flat()
        .reduce((tags: { [key: string]: tag }, tag: tag) => {
          const key = JSON.stringify(tag);
          if (!tags[key]) {
            tags[key] = tag;
          }
          return tags;
        }, {})
    ).concat(tags);
    
		const allcollaborateurices: tag[] = Object.values(
      dataPosts.map((node) => node.collaborateurices.nodes.map((node) => ({
          name: node.name,
          slug: node.slug,
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
    
    const posts = dataPosts.map((node) => {
			const { uri, date, title } = node
      const thetags = node.tags.nodes.map((node) => { return node.slug })
			const thecollaborateurices = node.collaborateurices.nodes.map((node) => { return node.slug }).concat(thetags)
			const tagsearch = node.categories.nodes.map((node) => { return node.slug }).concat(thetags, thecollaborateurices);

			const categories = node.categories.nodes.map((cat: tag) => {
				return {
					name: cat.name,
					slug: cat.slug
				}
			})

			const tags = node.tags.nodes.map((node) => {
				return {
					name: node.name,
					slug: node.slug
				}
			}).concat(categories)

			const collaborateurices = node.collaborateurices.nodes.map((node) => {
				return {
					name: node.name,
					slug: node.slug
				}
			}).concat(tags)

			const huge = tagsearch.includes('recit')

			const author = node.infos.author

      
			return {
				date,
				uri,
				title,
				tags,
				categories,
				author,
				slug,
        tagsearch,
				huge
			}
		})

		const { title } = generalSettings

		return { title, posts, alltags, allcollaborateurices }
	} catch (err: unknown) {
		const httpError = err as { status: number; message: string }
		if (httpError.message) {
			throw error(httpError.status ?? 500, httpError.message)
		}
		throw error(500, err as string)
	}
}) satisfies PageServerLoad
