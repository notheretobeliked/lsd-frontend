import type { LayoutLoad } from './$types'

export const prerender = false

export const load: LayoutLoad = function load({ url }) {
	const { pathname } = url
	return { 
		pathname,
		url: 'https://lasurfacedemange.villa-arson.fr' + pathname,
		pageTitle: 'La Surface Démange',
		metadescription:
			"La surface démange est une ligne de recherche sur les approches critiques de l’éducation artistique. Cette plateforme accueille des contributions sur les formes pédagogiques émancipatrices issues de différents milieux dont l'enseignement supérieur d’art et de design, les centre d’art et les milieux militants artistiques.",
		image: {
			url: '/LSD-image-partage-RVB.webp',
			alt: 'La Surface Démange'
		},
		squareImage: {
			url: '/LSD-image-partage-RVB.webp',
			alt: 'La Surface Démange'
		} 
	}
}
