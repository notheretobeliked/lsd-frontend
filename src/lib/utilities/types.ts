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

export interface PageData {
	page: Page
}

export interface PageQueryVariables {
	uri: string
}

export interface PageQueryResponse {
	data: PageData
}
