export interface tag {
	name: string
	slug: string
}

export interface HomePageNode {
	uri: string
	title: string
	date: string
	tags: {
		edges: {
			node: tag
		}[]
	}
	infos: {
		author: string
	}
}

export interface HomepageData {
	posts: {
		edges: {
			node: HomePageNode
		}[]
	}
	generalSettings: {
		title: string
	}
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

export type EmbedType = 'vimeo' | 'soundcloud' | null;

export interface Article {
	uri: string
	title: string
	date: string
	content: string
	tags: {
		edges: {
			node: tag
		}[]
	}
	infos: {
		author: string
		embed: string
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
