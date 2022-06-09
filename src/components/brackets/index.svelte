<script lang="ts">
	// components behind the application
	//import Controls from './Controls.svelte';
	import Bracket from './Bracket.svelte';
	import { names } from './stores';
    import Header from './header.svelte'; 
	// store describing the teams and the shuffle function
	// following the shuffle event shuffle the teams with the function provided on the store
	function handleShuffle() {
		names.shuffle();
	}

	// based on the array of names, create an array of objects for the bracket
	// this to provide an identifier as to distinguish the elements in the {#each} block
	$: bracket = $names.map((name) => ({
		name,
		id: Math.random()
	}));
</script>

<Header title="Who's going to win?" />
<!--<Controls on:shuffle={handleShuffle} />--->

<!-- to display the names side by side, wrap the bracket component in a container styled as a flex row -->
<main class="bracket">
	<Bracket {bracket} />
</main>

<style>


	.bracket {
		max-width: 800px;
		width: 100%;
		display: flex;
	}
</style>
