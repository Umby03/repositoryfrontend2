<!--TABELLA TORNEI, CON UN CERCA TORNEO CHE è NELLA NAV BAR -->
<script lang="ts">
	import { mockData } from '../../mock';
	console.log(mockData);
	let cont = 0;

	export let name: string = '';
	let results = [];

	$: {
		fetch('http://192.168.58.55:8080/tournament/allTournament', {
			body: JSON.stringify({ name }),

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
</script>

<!--BISOGNA FARE IL CONTROLLO PER LA NAV BAR, SE è LOGGATO NAV BAR ADMIN SE NON è LOGGATOO NAV BAR PUBLIC-->

<center>
	<table class="table table-dark table-striped" style="padding:20px">
		<thead>
			<tr>
				<th scope="col">N</th>
				<th scope="col">Nome</th>
				<th scope="col">Creatore</th>
				<th scope="col">Numero team</th>
				<th scope="col">In Corso</th>
				<th scope="col">Sport</th>
			</tr>
		</thead>
		<tbody>
			{#each results as item, i}
				<!--  <tr  on:click={() => {
      window.location.href = '/admin/torneo/' + item.id
        }}>
      -->

				<tr>
					<th scope="row">{cont + i + 1}</th>
					<td>{item.firstname}</td>
					<td>{item.lastname}</td>
					<td>{item.altro}</td>
				</tr>
			{:else}
				Nessun elemento
			{/each}
		</tbody>
	</table>
</center>
<div class="col-md-3" id="sidebar" />

<style>
	#sidebar {
		padding: 0;
	}
</style>
