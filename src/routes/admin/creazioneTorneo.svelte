<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';

	import { flag } from '../../stores/store';
 
	onMount(() => {
		if(!localStorage.getItem('Profilo')){
	  	 window.location.href= "/public/login"
			}
		})


	let name: string;
	let description: string;
	let name_sport: string;
	let isPrivate = true;
	let user_for_team: number;
	let ricerca: string;
	let ricerca2: string;
	let nomeTeam: string;
   
	let results1 = [];
    let Utenti=[];
    let i=0;
	function searchUtente (){
		if (typeof localStorage != 'undefined') {

		if (ricerca && ricerca.startsWith(" ")) {
			let idUser = null
            const x = ricerca.trim()
			results1.forEach(element => {
				if(element.email == x){
					idUser = element.ID_User
					return
				}
			});
			results1.forEach(element => {
				if(element.email == x){
					Utenti[i] = element.email;
					i++;
					return
				}
			});

			if(idUser != null){
				selezionaUtente(idUser)
				idUser = null
			}
			
		} else {

		fetch('http://192.168.236.55:8080/user/search', {
			method: 'post',

			body: JSON.stringify({ email: ricerca }),

			headers: {
				'content-type': 'application/json',
				authorization: localStorage.getItem('token')
			}
		})
			.then((resp) => resp.json())
			.then((json) => {
				results1 = json;
			
			});
	}}
	}
    
	let results3=[];


	function searchUtenteTeam (){
		if (typeof localStorage != 'undefined') {

		if (ricerca2 && ricerca2.startsWith(" ")) {
		
			let idUser2 = null
            const x2 = ricerca2.trim()
			results3.forEach(element => {
				if(element.email == x2){
					idUser2 = element.ID_User
					return
				}
			});

			if(idUser2 != null){
				selezionaUtenteTeam(idUser2)
				idUser2 = null
			}
			
		} else {

		fetch('http://192.168.236.55:8080/user/search', {
			method: 'post',

			body: JSON.stringify({ email: ricerca2 }),

			headers: {
				'content-type': 'application/json',
				authorization: localStorage.getItem('token')
			}
		})
			.then((resp) => resp.json())
			.then((json) => {
				results3 = json;
			
			});
	}}
	}




let results2;

	async function selezionaUtente(id) {
		if (typeof localStorage != 'undefined') {
			fetch('http://192.168.236.55:8080/team/create', {
				method: 'post',

				body: JSON.stringify({ ID_User: id, ID_Tournament: result.ID_Tournament }),

				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => resp.json())
				.then((json) => {
					results2 = json;
                    ricerca="";
				});
		}
	}

	let results4: {
		ID_Team?: number;
	} = {};


	

	async function selezionaUtenteTeam(id) {
		if (typeof localStorage != 'undefined') {


			if(! results4.ID_Team){
				fetch('http://192.168.236.55:8080/team/createMultipleTeam', {
				method: 'post',

				body: JSON.stringify({ ID_User: id, ID_Tournament: result.ID_Tournament, name: nomeTeam }),

				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => resp.json())
				.then((json) => {
					results4 = json;
					
				});

			} else{
			fetch('http://192.168.236.55:8080/team/createMultipleTeam', {
				method: 'post',

				body: JSON.stringify({ ID_User: id, ID_Tournament: result.ID_Tournament, ID_Team: results4.ID_Team}),

				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => resp.json())
				.then((json) => {
					results4 = json;
					
				});
			}
		}
	}

	//controllo su quello che mi manda( esempio ho già inserito l'utente)

	
    let result: {
		ID_Tournament?: number;
	} = {};
	let torneocreato = 0;

	async function creazioneTorneo() {
		const response = await fetch('http://192.168.236.55:8080/tournament/create', {
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

		result = await response.json();

		torneocreato = 1;
	}

async function nuovoTeam () {
	ricerca2="";

	let creazione=1;
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
				style=" margin-top:30px; margin-bottom:20px"
				on:click={() => {
					creazioneTorneo();
				}}><h2>CREA TORNEO</h2></button
			>
		</div>

		<div class="col">
			{#if (torneocreato == 1)}
				{#if user_for_team < 2}
					<label class="form-check-label" for="form-inline my-2 my-lg-0">Inserisci Utente </label>

					<form class="d-flex search-form" id="form" >
						<input
							bind:value={ricerca}
							on:change={searchUtente}
							on:keydown={searchUtente}
							class="form-control mr-sm-2"
							type="search"
							placeholder="Cerca Utente"
							aria-label="Search"
							style="height:40px; margin-top:5px;"
							list="datalistOptions3"
						/>
						<datalist id="datalistOptions3">
							{#each results1 as item, i}
							<!--	<option
									value={"#" + i}	
								>{item.email}</option>
								-->

								<option value={" " + item.email}></option>
							{/each}
						</datalist>
						<br /></form>
						<!--<button
							type="button"
							class="btn btn-outline-warning"
							style=" margin-left:10px"
							on:click={() => {
								iscriviUtente();
							}}>Inserisci Utente</button
						>
					
-->
					Utenti inseriti:
					<ul>
						{#each Utenti as item, c}
							<li>{item}</li>
						{/each}
					</ul>
				{:else}
				<input type="text" placeholder="Inserisci il nome del team" bind:value={nomeTeam}> 
				<label class="form-check-label" for="form-inline my-2 my-lg-0">Inserisci Utente </label>

				<form class="d-flex search-form" id="form" >
					<input
						bind:value={ricerca2}
						on:change={searchUtenteTeam}
						on:keydown={searchUtenteTeam}
						class="form-control mr-sm-2"
						type="search"
						placeholder="Cerca Utente"
						aria-label="Search"
						style="height:40px; margin-top:5px;"
						list="datalistOptions6"
					/>
					<datalist id="datalistOptions6">
						{#each results3 as item, i}
							<option value={" " + item.email}></option>
						{/each}
					</datalist>
					<br /></form>

					<button
					type="button"
					class="btn btn-outline-warning"
					style=" margin-top:30px"
					on:click={() => {
						nuovoTeam()
					}}><h2>NUOVO TEAM</h2></button
				>

			
				{/if}
			{/if}
		</div>
	</div>
</div>
