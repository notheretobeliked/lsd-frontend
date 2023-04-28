export interface tag {
	name: string
	slug: string
}

export interface HomePageNode {
	uri: string
	title: string
	date: string
	tags: {
		edges: tag[]
	}
	categories: {
		edges: tag[]
	}
	infos: {
		author: string
	}
}

export interface HomepageData {
	posts: Posts[]
	generalSettings: {
		title: string
	}
	alltags: {
		tag: tag[]
	}
}

export interface Posts {
  posts: {
    nodes: HomePageNode[]
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
