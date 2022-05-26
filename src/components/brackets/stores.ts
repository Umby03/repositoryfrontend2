import { writable } from 'svelte/store';
import { shuffleTeams } from './utils.js';
// starting from a hard-coded array of names
const teams = [
		'Turtles',
		'Hummingbirds',
		'Dolphins',
		'Lambs',
		'Lions',
		'Giraffes',
		'Wolves',
		'Pellicans'
	];



export	const partite = {
		8:[
			{
				club:['Turtles','Hummingbirds','aaaa','aaaaaa'],
				winner:'Hummingbirds',
				score:[3,0]
			},
			{
				club:['Dolphins','Lambs'],
				winner:'Lambs',
				score:[3,0]
			},
			{
				club:['Lions','Giraffes'],
				winner:'Giraffes',
				score:[3,0]
			},
			{
				club:['Wolves','Pellicans'],
				winner:'Wolves',
				score:[3,0]
			}
		],
		'quarto':null,
		'seminale':null,
		'finale':null
	}

// create a custom store with a .shuffle function, which allow to shuffle the array described in the store
function createNames() {
	const { subscribe, set, update } = writable(teams);
	
	return({
		subscribe,
		shuffle: () => update(n => n = shuffleTeams(n))
	});
}

// export the custom store
// the array is available through $names
// it is updated through names.shuffle()
export const names = createNames();