import type { PageServerLoad } from './$types'
import {redirect} from '@sveltejs/kit'

export const load = (async ({ params }) => {

		throw redirect(308, '/articles')

}) satisfies PageServerLoad
