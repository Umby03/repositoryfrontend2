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
	import Brackets from '../../../components/brackets/index.svelte'
	import { onMount } from 'svelte';

	export let id: string;
	let torneo;
   

	onMount(async () => {
		try {
			const response = await fetch('http://192.168.236.55:8080/tournament/searchID', {
			method: 'post',
			body: JSON.stringify({ ID_Tournament: id }),
			headers: {
				'content-type': 'application/json',
				authorization: localStorage.getItem('token')
			}
		});

		const json = await response.json();
		torneo = json;
		console.log(torneo.rounds);
		} catch (error) {
			// alert("Errore generico");
			console.error(error);
		}

	});

  let results=[];
  let results2=[];
 let risultatoStart=[];




  async function Start(){
	const response = await fetch('http://192.168.236.55:8080/tournament/start', {
			method: 'post',
			body: JSON.stringify({ ID_Tournament: id }),
			headers: {
				'content-type': 'application/json',
				authorization: localStorage.getItem('token')
			}
		});

		const json = await response.json();
		 risultatoStart = json;
  }
let email:string;
let loggato=0;
  onMount(() => {
		if(localStorage.getItem('Profilo')){
	  	loggato=1;
		  email=localStorage.getItem('Profilo');
			}
		})


/*	async function unisciti (){
		//iscriversi come utente normale
		if (typeof localStorage != 'undefined') {
            fetch('http://192.168.236.55:8080/tournament/', { //mettere il percorso giusto
    
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

		async function uniscitiClub (){
		//iscriversi come club
		if (typeof localStorage != 'undefined') {
            fetch('http://192.168.236.55:8080/tournament/', { //mettere il percorso giusto
    
                headers: {
                    'content-type': 'application/json',
                   authorization: localStorage.getItem('token')
                }
            })
                .then((resp) => resp.json())
                .then((json) => {
                    results2 = json;
                });
			}
        }

      let results1;

       let name: string;
		$: {
		if (typeof localStorage != 'undefined') {
            //per visualizzare tutti i club
			fetch('http://192.168.236.55:8080/tournament/search', {

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


async function selezionaclub( id){
	//per mandare l'id del club selezionato
	if (typeof localStorage != 'undefined') {
            fetch('http://192.168.236.55:8080/tournament/searchID', {
				method: 'post',
				body: JSON.stringify({id}),
                headers: {
                    'content-type': 'application/json',
                   authorization: localStorage.getItem('token')
                }
            })
                .then((resp) => resp.json())
                .then((json) => {
                    results2 = json;
                });
			}
		}
      */
</script>
<center>

<h1 style="margin-top:50px;">Torneo degli amici</h1>

<img
			src="/brackets1.png"
			width="50%"
			height="50%"
			class="rounded mx-auto d-block"
			alt="schema torneo"
			style="margin-top:50px; margin-bottom:50px"
		/>
 </center>

<!--
{#if torneo}



	<center>
		<h1>{torneo.name}</h1>
	</center>
	<button
			type="button"
			class="btn btn-outline-warning"
			style=" margin-top:30px"
			on:click={() => {
				Start();
			}}><h2>Start Torneo</h2></button
		>

	{#if torneo.inprogress == 0}
	
	<right>
		<button
				type="button"
				class="btn btn-outline-warning"
				style=" margin-top:30px"
				on:click={() => {
					unisciti();
				}}><h2>ISCRIVITI</h2></button
			>
			<button
				type="button"
				class="btn btn-outline-warning"
				style=" margin-top:30px"
				on:click={() => {
					uniscitiClub();
				}}><h2>ISCRIVITI COME CLUB</h2></button
			>
	<label for="list" class="form-label">Unisciti come Club</label>
			<input
				bind:value={name}
				class="form-control"
				list="datalistOptions"
				id="list"
				placeholder="Cerca tra i tuoi club"
			/>
			<datalist id="datalistOptions">
				{#each results1 as item, i}
					<option value={item.name} on:click={() => {
						selezionaclub(item.ID_Club);
					}}></option>
				{/each}
				</datalist>
			</right>
	



	{/if}
	BRAKETS
{/if}
		  -->		