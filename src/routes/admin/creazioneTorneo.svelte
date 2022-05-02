<script lang="ts">
	import { goto } from '$app/navigation';

	import { flag } from '../../stores/store';

	let name: string;
	let description: string;
	let name_sport: string;
	let isPrivate = true;
	let user_for_team: number;
	let ricerca: string;
	let Utenti = [];
	let i = 0;
	let selezionato: string;
	let results;

	async function invitaUtente() {
		if (typeof localStorage != 'undefined') {
			

			fetch('http://192.168.66.55:8080/user/search', {
				method:'post',

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

	async function invitaSquadra() {
		if (typeof localStorage != 'undefined') {
			

			fetch('http://192.168.66.55:8080/user/search', {
				method:'post',

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


	async function creazioneTorneo() {
		const response = await fetch('http://192.168.66.55:8080/tournament/create', {
			method: 'post',

			body: JSON.stringify({
				name,
				description,
				isPrivate,
				user_for_team,
				name_sport
			}),

			headers: {
				'content-type': 'application/json',
				authorization: localStorage.getItem('token')
			}
		});

		const result = await response.json();
	}

	/*if(!localStorage.getItem('Profilo')){
     goto('/public/login')
	}*/
</script>

<center>
	<h1 style="margin-top:20px">Creazione torneo</h1>
</center>
<div class="container">
	<div class="row align-items-start">
		<div class="col">
			<div class="input mb-3">
				<label for="nomeTorneo" class="form-label">Nome Torneo</label>
				<input
					bind:value={name}
					type="text"
					class="form-control"
					aria-label="nomeTorneo"
					aria-describedby="basic-addon1"
					style="wight:20px;"
				/>
			</div>

			<div class="mb-3">
				<label for="textarea1" class="form-label">Descrizione Torneo</label>
				<textarea bind:value={description} class="form-control" id="textarea1" rows="3" />
			</div>

			<div class="mb-3">
				<label for="textarea2" class="form-label">Sport Torneo</label>
				<textarea
					style=" height:10px;"
					bind:value={name_sport}
					class="form-control"
					id="textarea2"
					rows="3"
				/>
			</div>
			<br />
			<div class="form-check">
				<input
					group={isPrivate}
					class="form-check-input"
					type="radio"
					name="flexRadioPubblico"
					id="flexRadioPubblico"
					value={false}
				/>
				<label class="form-check-label" for="flexRadioPubllico"> Pubblico </label>
			</div>
			<div class="form-check">
				<input
					group={isPrivate}
					class="form-check-input"
					type="radio"
					name="flexRadioPrivato"
					id="flexRadioPrivato"
					value={true}
				/>
				<label class="form-check-label" for="flexRadioPrivato"> Privato </label>
			</div>
			<br />
			<div class="mb-3">
				<input
					style="width:60px;"
					bind:value={user_for_team}
					type="number"
					name="numeromax"
					id="numeromax"
				/>
				<label class="form-check-label" for="numeromax">
					Inserisci il numero massimo di partecipanti per ogni squadra
				</label>
			</div>
		


			<button
				type="button"
				class="btn btn-outline-warning"
				style=" margin-top:30px"
				on:click={() => {
					invitaUtente();
				}}><h2>INVITA UTENTE</h2></button
			>

			<button
				type="button"
				class="btn btn-outline-warning"
				style=" margin-top:30px"
				on:click={() => {
					invitaSquadra();
				}}><h2>INVITA SQUADRA</h2></button
			>	
		
			<!--<form class="form-inline my-2 my-lg-0">
				<input
					bind:value={ricerca}
					class="form-control mr-sm-2"
					type="search"
					placeholder="Cerca"
					aria-label="Search"
				/>
				<br>
				<button
					class="btn btn-outline-success my-2 my-sm-0"
					type="submit"
					on:click|preventDefault={() => {
						inserisciUtente();
					}}>Cerca</button
				>
			</form>

			{#each results as item, i}
				<tr>
					<td
						value={selezionato}
						on:click={() => {
							selezionaUtente();
						}}>{item.element}</td
					>
				</tr>
			{:else}
				Nessun elemento
			{/each}
			
			<br />

			{#if ( results )}
				<tr>
					<td>{results.email}</td>
				</tr>
				
			{/if}-->


			<button
				type="button"
				class="btn btn-outline-warning"
				style=" margin-top:30px"
				on:click={() => {
					creazioneTorneo();
				}}><h2>CREA TORNEO</h2></button
			>
		</div>
		<div class="col" />
	</div>
</div>
