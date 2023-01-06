
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  
  return { 
    slug: params.slug, 
    content: `<h1>Stuff here, active section: ${params.slug}</h1>`
  } 

}) satisfies PageServerLoad
