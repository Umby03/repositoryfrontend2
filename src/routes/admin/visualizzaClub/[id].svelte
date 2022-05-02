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


	onMount(async () => {
		const response = await fetch('http://192.168.66.55:8080/Club/searchID', {
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

</script>

{#if club}

<h1><b>I tuoi tornei</b></h1>
<br />  <br /> 
 <table class="table table-dark table-striped">
  <thead>
      <tr>
        <th scope="col">N</th>
        <th scope="col">Name</th>
        
      </tr>
    </thead>
    <tbody>
      {#each club.users as item,i}
      <tr>
          <th scope="row">{cont + i}</th>
          <td>{item.name}</td>
        </tr>
  {/each}
    </tbody>
 </table>




{/if}

