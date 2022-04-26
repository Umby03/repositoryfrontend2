import { writable } from 'svelte/store'

export const user = writable({
    name: "Carlo",
    tornei:2,
    giocati:3,
    image:"https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg"
})

export const flag = writable(0)