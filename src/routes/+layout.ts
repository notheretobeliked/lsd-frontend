import type { LayoutLoad } from './$types'

export const prerender = false

export const load: LayoutLoad = function load({ url }) {
	const { pathname } = url
	return { pathname }
}
