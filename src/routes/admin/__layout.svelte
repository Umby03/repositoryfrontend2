	<nav class="bg-light">
		<a class="navbar-brand" on:click={()=>{actionClick()}}><h2>Profilo</h2></a>
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
		<form class="d-flex search-form">
			<input
				class="form-control"
				type="search"
				placeholder="Cerca un Torneo"
				aria-label="Search"
				style="font-size:19px;"

			/>
			<button class="btn btn-outline-success" type="submit" style="font-size:17px;">Cerca</button>
		</form>
	</nav>

  <div class="container-fluid">

	<slot />


	<br /><br /><br /><br /><br /><br />
<FooterComponent  />
</div>

<style lang="scss" global>
	@import 'bootstrap/scss/bootstrap';
	//.navbar navbar-light bg-light{
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
