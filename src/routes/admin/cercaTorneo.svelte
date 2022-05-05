<!--TABELLA TORNEI, CON UN CERCA TORNEO CHE è NELLA NAV BAR -->
<script context="module">
	export async function load({ params, fetch }) {
		return {
			props: {
				results: params
			}
		};
	}

</script>

<script lang="ts">
	let ricerca;

	let cont = 1;

	//export let name: string = '';
	let results;

	let results1;

let name: string;
 $: {
 if (typeof localStorage != 'undefined') {
	 //per visualizzare tutti i club
	 fetch('http://192.168.66.55:8080/tournament/search', {

		 method: 'post',
		 body: JSON.stringify({name}),

		 headers: {
			 'content-type': 'application/json',
			 authorization: localStorage.getItem('token')
		 }
	 })
		 .then((resp) => resp.json())
		 .then((json) => {
			 results1 = json;
		 });
		 
 }
}

let results2;

async function selezionatorneo( id){
//per mandare l'id del club selezionato
if (typeof localStorage != 'undefined') {
	 fetch('http://192.168.58.55:8080/tournament/searchID', {
		 method: 'post',
		 body: JSON.stringify({id}),
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

	async function cercaTorneo() {
		if (typeof localStorage != 'undefined') {
			fetch('http://192.168.66.55:8080/tournament/search', {
				method: 'post',

				body: JSON.stringify({ name: ricerca }),

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

<!--BISOGNA FARE IL CONTROLLO PER LA NAV BAR, SE è LOGGATO NAV BAR ADMIN SE NON è LOGGATOO NAV BAR PUBLIC-->
<br />
<div class="row align-items-start">
	<div class="col" />
	<div class="col">
		<div class="flex-container">
			<form class="form-inline my-2 my-lg-0">
			<!--	<input
					bind:value={ricerca}
					class="form-control mr-sm-2"
					type="search"
					placeholder="Cerca"
					aria-label="Search"
				/>-->
				<input
				    bind:value={ricerca}
					class="form-control"
					list="datalistOptions"
					id="list"
					placeholder="Cerca torneo"
				/>

				<datalist id="datalistOptions">
					{#each results1 as item, i}
						<option
							value={item.name}
							on:click={() => {
								selezionatorneo(item.ID_Tournament);
							}}
						/>
					{/each}

				</datalist>
				<button
					class="btn btn-outline-success my-2 my-sm-0"
					type="submit"
					on:click|preventDefault={() => {
						cercaTorneo();
					}}>Cerca</button
				>
			</form>
		</div>
	</div>
	<div class="col" />
</div>
<br />

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
				<tr
					on:click={() => {
						window.location.href = '/admin/visualizzaTorneo/' + item.ID_Tournament;
					}}
				>
					<th scope="row">{cont + i}</th>
					<td>{item.name}</td>
					<td>{item.description}</td>
				</tr>
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
