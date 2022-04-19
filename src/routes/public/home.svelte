<script lang="ts">
	import { goto } from '$app/navigation';

	function creaTorneo() {
		goto('../admin/creazioneTorneo');
	}
</script>

<br /><br /><br />
<div class="row align-items-start">
	<div class="col">
		<div class="container">
			<center>
				<h1>Affidati a noi per gestire il tuo torneo!!</h1>
				<br /><br /><br />
				<h3>
					Basta più calcoli, con noi potrai organizzare il tuo torneo facilmente e gestirlo
					dinamicamente.
				</h3>
				<br /><br /><br /><br /></center
			>

			<div class="d-grid gap-2 col-6 mx-auto">
				<button
					type="button"
					class="btn btn-outline-warning"
					on:click={() => {
						creaTorneo();
					}}><h1>CREA IL TUO TORNEO</h1></button
				>
			</div>
		</div>
	</div>
	<div class="col">
		<img
			src="https://img.freepik.com/vector-gratis/plantillas-soporte-torneo-plantilla-calendario-playoffs-soporte-torneo-diseno-creativo-soporte-torneo-blanco-ilustracion-vector_435184-453.jpg"
			width="90%"
			height="90%"
			class="rounded mx-auto d-block"
			alt="schema torneo"
		/>
	</div>
</div>
<br /><br /><br />

<br /><br /><br /><br /><br /><br />

<div class="container-fluid">
	<div class="row align-items-start">
		<div class="col" />
		<div class="col">
			<center>
				<div class="ratio ratio-4x3">
					<iframe
						src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0 "
						title="YouTube video"
						allowfullscreen
						style="padding:10px;"
					/>
				</div>
			</center>
		</div>
		<div class="col" />
	</div>
</div>

<br /> <br /> <br /> <br /> <br /> <br /> <br />
<center> <h1>Trusted by</h1></center>
<br /> <br />
<div class="container">
	<div class="row align-items-end">
		<div class="col">
			<img
				src="https://www.astuccieshopper.it/wp-content/uploads/2018/09/logo-astratto-di-sicurezza.jpeg"
				width="70%"
				height="70%"
				class="rounded mx-auto d-block"
				alt="azienda1"
			/>
		</div>
		<div class="col">
			<img
				src="https://www.lelcomunicazione.it/public/blog/creazione-un-logo-aziendale-successo.jpg"
				width="70%"
				height="70%"
				class="rounded mx-auto d-block"
				alt="azienda2"
			/>
		</div>
		<div class="col">
			<img
				src="https://www.studio7b.it/wp-content/uploads/2018/11/hotech_design_radiators_logo_design_loghi_studio7b_01.jpg"
				width="70%"
				height="70%"
				class="rounded mx-auto d-block"
				alt="azienda3"
			/>
		</div>
	</div>
</div>

<style lang="scss" global>
	@import 'bootstrap/scss/bootstrap';
	
</style>
