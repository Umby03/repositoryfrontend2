<script lang="ts">
	import { goto } from '$app/navigation';
import { navigating } from '$app/stores';

	let test: string[] = [];
	function Chisiamo() {
		window.location.href='/public/chisiamo';
	}
	function Home() {
		window.location.href='/public/home';
	}

</script>
<footer class="row row-cols-5  bg-dark" style="margin-top:0!important;">
	<div class="col">
		<a href="" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
			<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
		</a>
		<p class="text-muted">© 2022</p>
	</div>

	<div class="col" />

	<div class="col" />

	<div class="col" />

	<div class="col">
		<h4 class="text-muted"></h4>

		<h4 class="text-muted">Link Accesibili</h4>
		<ul class="nav flex-column">
			<li class="nav-item mb-2">
				<a href="#"
					on:click={() => {
						Home();
					}}
					class="nav-link p-0 text-muted"
					><h6>Home</h6>
				</a>
			</li>

			<li class="nav-item mb-2">
				<a href="#"
					on:click={() => {
						Chisiamo();
					}}
					class="nav-link p-0 text-muted"
					><h6>Chi Siamo</h6>
				</a>
			</li>

			<li class="nav-item mb-2">
				<a href="#" class="nav-link p-0 text-muted"><h6>Pricing</h6></a>
			</li>
			<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><h6>About</h6></a></li>
		</ul>
	</div>
</footer>
