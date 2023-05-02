import { localStorageStore } from 'fractils'

export const postsStore = localStorageStore('postsStore', [])
export const tagStore = localStorageStore('tagStore', '')
