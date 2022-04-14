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
		<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
			Button with data-bs-target
		  </button>
	</div>
</nav>

  <div class="container-fluid">

	<slot />


	<br /><b><br /><br /><br /><br />
		<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
			Button with data-bs-target
		  </button>
		  
		<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
			<div class="offcanvas-header">
			  <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
			  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
			  <div>
				Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
			  </div>
			  <div class="dropdown mt-3">
				<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
				  Dropdown button
				</button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				  <li><a class="dropdown-item" href="#">Action</a></li>
				  <li><a class="dropdown-item" href="#">Another action</a></li>
				  <li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			  </div>
			</div>
		  </div>
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
