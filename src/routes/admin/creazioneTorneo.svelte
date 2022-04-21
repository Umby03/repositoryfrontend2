<script lang="ts">
import { goto } from "$app/navigation";

let flag=1

	let nomeTorneo: string;
	let descrizioneTorneo: string;
	let sportTorneo: string;

	async function creazioneTorneo() {
		const response = await fetch('http://192.168.6.55:8080/auth/', {
			method: 'post',

			body: JSON.stringify({
				nomeTorneo,
				descrizioneTorneo,
				sportTorneo
			}),

			headers: {
				'content-type': 'application/json'
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
					bind:value={nomeTorneo}
					type="text"
					class="form-control"
					aria-label="nomeTorneo"
					aria-describedby="basic-addon1"
					style="wight:20px;"
				/>
			</div>

			<div class="mb-3">
				<label for="textarea1" class="form-label">Descrizione Torneo</label>
				<textarea bind:value={descrizioneTorneo} class="form-control" id="textarea1" rows="3" />
			</div>

			<!--	<div class="form-floating">
				<label for="textarea">Descrizione Torneo </label>
				<textarea
					class="form-control"
					placeholder="Descrizione"
					id="textarea"
					style="height:100px;"
				/>
			</div>
		  -->

			<select
				bind:value={sportTorneo}
				class="form-select"
				aria-label="Select sport"
				style="margin-top:10px; wight:20px"
			>
				<option selected>Seleziona lo sport</option>
				<option value="1">Pallavolo</option>
				<option value="2">Calcio</option>
				<option value="3">Tennis</option>
				<option value="4">Basket</option>
				<option value="4">Padel</option>
			</select>

			
				<button
					type="button"
					class="btn btn-outline-warning" style=" margin-top:30px"
					on:click={() => {
						creazioneTorneo();
					}}><h2>CREA IL TUO TORNEO</h2></button
				>
			</div>
		<div class="col" />
	</div>
</div>

