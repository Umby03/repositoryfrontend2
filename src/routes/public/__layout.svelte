	
<div class="container-fluid">
	<!-- Navbar content -->
	<nav class="navbar navbar-expand-lg navbar-light bg-light" >

			<a class="navbar-brand" href="#">
				<img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
			  </a>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			  <li class="nav-item">
				<a class="nav-link active" aria-current="page" href="#"><h3>Home</h3></a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#"><h3>Accedi</h3></a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#"><h3>Registrati</h3></a>
			  </li>
			</ul>
			<form class="d-flex">
			  <input class="form-control me-2" type="search" placeholder="Cerca un Torneo" aria-label="Search">
			  <button class="btn btn-outline-success" type="submit">Search</button>
			</form>
		  </div>
		
	  </nav>
</div>
<br><br><br><br><br><br>
<div class="container">
		<slot />

		
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

	.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 40%; // 2x1
  }
}
</style>
