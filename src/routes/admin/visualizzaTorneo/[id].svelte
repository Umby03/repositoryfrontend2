<script context="module">
	export async function load({ params, fetch }) {
		return {
			props: {
				id: params.id
			}
		};
	}

</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let id: string;
	let torneo;


	onMount(async () => {
		const response = await fetch('http://192.168.66.55:8080/tournament/searchID', {
			method: 'post',
			body: JSON.stringify({ ID_Tournament: id }),
			headers: {
				'content-type': 'application/json',
				authorization: localStorage.getItem('token')
			}
		});

		const json = await response.json();
		torneo = json;
	});

  let results;

	async function unisciti (){
		if (typeof localStorage != 'undefined') {
            fetch('http://192.168.58.55:8080/tournament/allTournament', {
    
                headers: {
                    'content-type': 'application/json',
                   authorization: localStorage.getItem('token')
                }
            })
                .then((resp) => resp.json())
                .then((json) => {
                    results = json;
                });
			}
        }
</script>

{#if torneo}
<center>
<h1>{torneo.name}</h1>
</center>

{#if torneo.inprogress==1}
<button
				type="button"
				class="btn btn-outline-warning"
				style=" margin-top:30px"
				on:click={() => {
					unisciti();
				}}><h2>UNISCITI AL TORNEO</h2></button
			>

{:else}

{torneo.winner}
{/if}
BRAKETS
{/if}