<script lang="ts">
import { goto } from '$app/navigation';
function actionClick(){
goto('/public/login')
}
function ActionClick(){
goto('/public/home')
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
		
	<nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-right:0px;">
		<a class="navbar-brand" href="#">
			<img
				src="/docs/5.1/assets/brand/bootstrap-logo.svg"
				alt=""
				width="30"
				height="24"
				class="d-inline-block align-text-top"
			/>
		</a>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" on:click={()=>{ActionClick()}}><h4>Home</h4></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" on:click={()=>{actionClick()}}><h4>Accedi/Registrati</h4></a>
				</li>
			</ul>
			<form class="d-flex">
				<input
					class="form-control me-2"
					type="search"
					placeholder="Cerca un Torneo"
					aria-label="Search"
					style="font-size:19px;"
				/>
				<button class="btn btn-outline-warning" type="submit" style="font-size:17px;">Search</button
				>
			</form>
		</div>
	</nav>

</div>
</div>
 <br/> <br/><br/>
	<div class="container-fluid" >
	<slot />
<!--{ciaovar}

<button class="btn btn-primary" on:click={()=>{actionClick()}}>prova bottone</button>
-->
	<FooterComponent  /> <!--page_title="pagina0"-->
</div>

<style lang="scss" global>
	@import 'bootstrap/scss/bootstrap';
	
	.navdiv{
		position:fixed;
		top:0;
		width:100%;
		z-index:999;
	}
	
</style>
