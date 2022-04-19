<center>
	<h1 style="margin-top:20px">Creazione torneo</h1>
</center>
<div class="container">
	<div class="row align-items-start">
		<div class="col">
			<div class="input mb-3">
				<label for="nomeTorneo" class="form-label"><h3>Nome Torneo</h3></label>
				<input
					type="text"
					class="form-control"
					aria-label="nomeTorneo"
					aria-describedby="basic-addon1"
					style="wight:20px;"
				/>
			</div>

			<div class="form-floating">
				<label for="textarea">Descrizione Torneo</label>
				<textarea
					class="form-control"
					placeholder="Descrizione"
					id="textarea"
					style="height:100px;"
				/>
			</div>

			<select class="form-select" aria-label="Default select example" style="margin-top:10px">
				<option selected>Seleziona lo sport</option>
				<option value="1">Pallavolo</option>
				<option value="2">Calcio</option>
				<option value="3">..</option>
			</select>
		</div>
		<div class="col" />
	</div>
</div>
