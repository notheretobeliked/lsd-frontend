import type { PageServerLoad } from './$types';
import type { HomepageData } from '$lib/utilities/types'
import postsQuery from '$lib/graphql/query/posts.graphql?raw'
import { checkResponse, graphqlQuery } from '$lib/utilities/graphql'
import { error } from '@sveltejs/kit'


export const load = (async ({ params }) => {  
  switch(params.slug) {
    case 'home': 
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

        const {slug} = params
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
    
    case 'a-propos':

    case 'editions':

    case 'credits':

  }

}) satisfies PageServerLoad


