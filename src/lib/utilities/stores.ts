import { writable } from 'svelte/store'
import { browser } from '$app/environment'

let initialTag = 'all'

if (browser) {
	initialTag = localStorage.getItem('tagStore') || initialTag
}

export const postsStore = writable([])
export const tagStore = writable(initialTag)

tagStore.subscribe((value) => {
	if (browser) {
		localStorage.setItem('tagStore', value)
	}
})
