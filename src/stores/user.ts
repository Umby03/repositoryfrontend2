import { writable } from 'svelte/store'

export const user = writable({
    name: "ciao",
    image:"https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg"
})