<script lang="ts">
 import { goto } from "$app/navigation";
    
    import {flag} from "../../stores/store"
    
        let name: string;
        let bio: string;
        let name_sport: string;
       
        let results = [];
    
    async function invitaUtente() {
		if (typeof localStorage != 'undefined') {
            fetch('http://192.168.43.55:8080/tournament/allTournament', {
    
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
     
    
      
      	async function creazioneClub() {
		const response = await fetch('http://192.168.43.55:8080/tournament/create', {
			method: 'post',

			body: JSON.stringify({
				name,
				bio,
				name_sport,
				
			}),

			headers: {
				'content-type': 'application/json',
				authorization: localStorage.getItem('token')
			}
		});

		const result = await response.json();
	}

        </script>
<center>
	<h1 style="margin-top:20px">Creazione Club</h1>
</center>
<div class="container">
	<div class="row align-items-start">
		<div class="col">
			<div class="input mb-3">
				<label for="nomeTorneo" class="form-label">Nome Club</label>
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
				<label for="textarea1" class="form-label">Descrizione Club</label>
				<textarea bind:value={bio} class="form-control" id="textarea1" rows="3" />
			</div>





			<div class="mb-3">
				<label for="textarea2" class="form-label">Sport Club</label>
				<textarea  style=" height:10px;"bind:value={name_sport} class="form-control" id="textarea2" rows="3" />
			</div>
			  <div class="mb-3">
			 </div>
			Clicca qui per generare un link da inviare ad un tuo amico
			<p>
			<button
				type="button"
				class="btn btn-outline-warning"
				style=" margin-top:30px; "
				on:click={() => {
					invitaUtente();
				}}>INVITA UTENTE</button
			>
				</p>

			 
		
				

				<button
					type="button"
					class="btn btn-outline-warning" style=" margin-top:30px"
					on:click={() => {
						creazioneClub();
					}}><h2>Crea Club</h2></button
				>
			</div>
		<div class="col" />
	</div>
</div>

