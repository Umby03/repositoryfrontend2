	<nav class="bg-light">
		<a class="navbar-brand" href="#">Profilo</a>
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
			/>
			<button class="btn btn-outline-success" type="submit">Cerca</button>
		</form>
	</nav>

  <div class="container-fluid">

	<slot />

	<br /><br /><br /><br /><br /><br />

	<footer class="row row-cols-5 py-5 my-5 border-top">
		<div class="col">
			<a href="" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
				<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
			</a>
			<p class="text-muted">© 2022</p>
		</div>

		<div class="col" />

		<div class="col">
			<h5>Section</h5>
			<ul class="nav flex-column">
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
			</ul>
		</div>

		<div class="col">
			<h5>Section</h5>
			<ul class="nav flex-column">
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
			</ul>
		</div>

		<div class="col">
			<h5>Section</h5>
			<ul class="nav flex-column">
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
				<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
			</ul>
		</div>
	</footer>
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
