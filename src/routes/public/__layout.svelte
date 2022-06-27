<script lang="ts">
import { goto } from '$app/navigation';
function actionClick(){
	window.location.href='/public/login'
}
function ActionClick(){
	window.location.href= '/public/home'
}

let nomeTorneo: string;
let result=[];
async function cercatorneo(){

		const response = await fetch('http://192.168.236.55:8080/auth/alltournament', {
			method: 'post',

			body: JSON.stringify({
				nomeTorneo
			}),

			headers: {
				'content-type': 'application/json'
			}
		});

		const result = await response.json();
	}

import FooterComponent from '../../components/FooterComponents.svelte'
/*let ciaovar=2*4

$:{
	if(!ciaovar) ciaovar=0
}


function actionClick(){

	ciaovar=ciaovar*2
	goto('/admin/prova')
}
*/
</script>

<div class="container-fluid">
	<div class="navdiv">
		
	<nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-right:0px; margin-left:-12px">
		
		<!--<link rel="icon" href="%svelte.assets%/favicon.png" />-->	
			<img
			    src="/braveme.png"
				alt=""
				width="100"
				height="50"
				class="d-inline-block align-text-top"
				style="margin-left:20px; margin-right:20px"
			/>
	
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" style="margin-top:10px" on:click={()=>{ActionClick()}}><h6>Home</h6></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" style="margin-top:10px" on:click={()=>{actionClick()}}><h6>Accedi/Registrati</h6></a>
				</li>
			</ul>
			<form class="d-flex">
				<input
				    bind:value={nomeTorneo}
					class="form-control me-2"
					type="search"
					placeholder="Cerca un Torneo"
					aria-label="Search"
					style="font-size:19px;"
				/>
				<button class="btn btn-outline-warning"  on:click={()=>{cercatorneo()}} type="submit" style="font-size:17px; margin-right:10%">Search</button
				>
			</form>
		</div>
	</nav>
</div>
</div>

	<div class="container-fluid">
	<slot />
<!--{ciaovar}

<button class="btn btn-primary" on:click={()=>{actionClick()}}>prova bottone</button>
-->
<!--page_title="pagina0"-->
<FooterComponent  />
</div>

<style lang="scss">	
	.navdiv{
		position:fixed;
		top:0;
		width:100%;
		z-index:999;
	}
	
</style>
