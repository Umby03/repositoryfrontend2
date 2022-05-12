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

import {mockData} from "../../mock"

	let ricerca;

	let cont = 1;

	//export let name: string = '';
	let results=[];

	let results1=[];

let name: string;
 $: {
	if (typeof localStorage != 'undefined') {
 
	 //per visualizzare tutti i club
	 fetch('http://10.10.1.29:8080/tournament/allTournament', {

		 method: 'post',
		 body: JSON.stringify({ name: ricerca}),

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

let results2=[];

async function selezionatorneo( id){
//per mandare l'id del club selezionato
if (typeof localStorage != 'undefined') {
	 fetch('http://10.10.1.29:8080/tournament/tournamentID', {
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
			fetch('http://10.10.1.29:8080/tournament/allTournament', {
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
			<!--<form class="form-inline my-2 my-lg-0">
					<input
					bind:value={ricerca}
					class="form-control mr-sm-2"
					type="search"
					placeholder="Cerca"
					aria-label="Search"
				/>
				
			<input 
				    bind:value={ricerca}
					class="form-control"
					list="list"
					id="list"
					placeholder="Cerca torneo"
				/>
				<input list="list" id="list" name="list" />


				<datalist id="list">
					
						<option value="ciao">
							<option value="	Erika"></option>
							
				</datalist>-->
				<div class="form-group">
					<label for="autocomplete-regioni" class="sr-only">Cerca nel sito</label>
					<input type="search" class="autocomplete" placeholder="Testo da cercare"
					  id="autocomplete-regioni"
					  name="autocomplete-regioni"
					
					  data-autocomplete='["text="erika"]'>
                    
					<span class="autocomplete-icon" aria-hidden="true">
					  <svg class="icon icon-sm"><use href="/bootstrap-italia/dist/svg/sprite.svg#it-search"></use></svg>
					</span>
				  </div>
			<!--	<datalist id="list">
					{#each mockData as item, i}
						<option
							value={item.firstname}
							on:click={() => {
								selezionatorneo(item.ID_Tournament);
							}}
							/>
							{/each}
				</datalist>-->

				<button
					class="btn btn-outline-success my-2 my-sm-0"
					type="submit"
					on:click|preventDefault={() => {
						cercaTorneo();
					}}>Cerca</button
				>
		<!--	</form>-->
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
