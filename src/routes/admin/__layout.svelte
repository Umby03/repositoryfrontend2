<nav class="bg-light">
	<a class="brand" style="margin: 0; float: none;" href="#">
		<img
			src="/docs/5.1/assets/brand/bootstrap-logo.svg"
			alt=""
			width="30"
			height="24"
			class="d-inline-block align-text-top"
			style="text-align:center"
		/>
	</a>

	<div class="d-flex h-100">
		<form class="d-flex search-form">
			<input
				class="form-control"
				type="search"
				placeholder="Cerca un Torneo"
				aria-label="Search"
				style="font-size:19px;"

			/>
			<button class="btn btn-outline-success" 
			type="submit" 
			style="font-size:17px;">
			Cerca</button>
		</form>
		<a class="navbar-brand" href="#" on:click={()=>{actionClick()}}>
			<img src="https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg" alt="Profile banner"
			width="50" height="50">
		</a>
	</div>
</nav>

  <div class="container-fluid">

	<slot />


	<br /><b><br /><br /><br /><br />
<FooterComponent  />
</div>

<style lang="scss" global>
	//.navbar navbr /ar-light bg-light{
	@import 'bootstrap/scss/bootstrap';
	//height: 700px;
	//width: 950px;
	//}

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

</style>

<script lang="ts">
	import { goto } from '$app/navigation';
	import FooterComponent from '../../components/FooterComponents.svelte'


function actionClick(){
goto('/admin/Profilo')
}
</script>
