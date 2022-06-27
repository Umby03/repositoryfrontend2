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
    let cont=1;
	import { onMount } from 'svelte';

	export let id: string;
	let club;
	let Utenti;


	onMount(async () => {
		const response = await fetch('http://192.168.236.55:8080/Club/searchID', {
			method: 'post',
			body: JSON.stringify({ ID_Club: id }),
			headers: {
				'content-type': 'application/json',
				authorization: localStorage.getItem('token')
			}
		});

		const json = await response.json();
		club = json;
	});


	async function utenti(){
		const response1= await fetch('http://192.168.236.55:8080/Club/utenti',{
			method: 'post',
			body: JSON.stringify({ ID_Club: id }),
			headers: {
				'content-type': 'application/json',
				authorization: localStorage.getItem('token')
			}
		});

		const json = await response1.json();
		Utenti = json;
	}

</script>

{#if club}
<center>
<h1><b>Utenti del Club</b></h1>
<br />  <br /> 
 <table class="table table-dark table-striped">
  <thead>
      <tr>
        <th scope="col">N</th>
        <th scope="col">Name</th>
        
      </tr>
    </thead>
    <tbody>
      {#each Utenti as item,i}
      <tr>
          <th scope="row">{cont + i}</th>
          <td>{item.name}</td>
        </tr>
  {/each}
    </tbody>
 </table>
</center>



{/if}

