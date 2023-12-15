export interface tag {
	name: string
	slug: string
}

export interface generalSettings {
	title: string
}

export interface HomePageNode {
	uri: string
	title: string
	date: string
	tags: {
		nodes: tag[]
	}
	collaborateurices: {
		nodes: tag[]
	}
	categories: {
		nodes: tag[]
	}
	infos: {
		author: string
	}
}

export interface HomepageData {
	posts: Posts[]
	generalSettings: generalSettings
	alltags: {
		tag: tag[]
	}
	allcollaborateurices: {
		collaborateurice: tag[]
	}
}

export interface Posts {
  posts: {
    nodes: HomePageNode[]
  }
	nodes?: HomePageNode[]
}

export interface PageSEO {
	description: string
}

export interface Page {
	id: string
	content: string
	title: string
	date: string
	uri: string
	seo: PageSEO
}

export type EmbedType = 'vimeo' | 'soundcloud' | null

export interface Article {
	uri: string
	title: string
	date: string
	content: string
	tagsearch: Array<string>
	tags: {
		nodes: tag[]
	}
	infos: {
		author: string
		embed: string
		pdf?: {
			node: {
				fileSize: number
				mediaItemUrl: string
				mediaType: string
				mimeType: string
				title: string
			}
		}
	}
	categories: {
		nodes: tag[]
	}
	seo: PageSEO
}

export interface PageData {
	page: Page
}

export interface PostData {
	post: Article
}

export interface PageQueryVariables {
	uri: string
}

export interface PageQueryResponse {
	data: PageData
}
