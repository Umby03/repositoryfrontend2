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

	console.log({id});
	

	onMount(async () => {

		try {
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

		console.log({club});
		

		} catch (err) {
			alert("Errore durante il caricamento dell'id")
			console.error(err)
		}



		try {
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
		} catch (error) {
			
		}

		try {
			const response1= await fetch('http://192.168.236.55:8080/Club/users',{
			method: 'post',
			body: JSON.stringify({ ID_Club: id }),
			headers: {
				'content-type': 'application/json',
				authorization: localStorage.getItem('token')
			}
		});

		const json = await response1.json();
		Utenti = json;
		} catch (error) {
			
		}


	});



</script>

{#if club}
<center>
<h1><b>{club.name}</b></h1>
<br />  <br /> 
<div class="col-md-3"> 
    </div>
<div class="col-md-6">
 <table class="table table-dark table-striped">
  <thead>
      <tr>
        <th scope="col">N</th>
        <th scope="col">Name</th>
		<th scope="col">Sport Name</th>
		<th scope="col">Bio</th>

      </tr>
    </thead>
    <tbody>
      <tr>
          <th scope="row">1</th>
          <td>{club.name}</td>
          <td>{club.name_sport}</td>
		  <td>{club.bio}</td>

        </tr>
    </tbody>
 </table>
 </div>
 <div class="col-md-3">
</div>



</center>
{/if}
