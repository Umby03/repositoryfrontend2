<script lang="ts">
	import { page } from '$app/stores';
	import FooterComponent from '../../components/FooterComponents.svelte';
	import { onMount } from 'svelte';

	let link: string;
	$: link = $page.routeId;
	$: console.log(link);
	function actionClick(link) {
		window.location.href = link;
	}

	//	onMount(() => {
	//		if(!localStorage.getItem('Profilo')){
	//    	 window.location.href= "/public/login"
	//		}
	//	})

	function logout() {
		localStorage.removeItem('Profilo');
		localStorage.removeItem('token');
		window.location.href = '/public/home/';
	}

	let ricerca;

	let results = [];

	async function cercaTorneo() {
		if (typeof localStorage != 'undefined') {
			fetch('http://192.168.66.55:8080/tournament/search', {
				method: 'post',

				body: JSON.stringify({ name: ricerca }),

				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => resp.json())
				.then((json) => {
					results = json;
				});
		}
		window.location.href = '/admin/cercaTorneo' + results;
	}

	let results1 = [];

	let name: string;
	$: {
		if (typeof localStorage != 'undefined') {
			//per visualizzare tutti i tornei(suggerimenti)
			fetch('http://192.168.66.55:8080/tournament/search', {
				method: 'post',
				body: JSON.stringify({ name }),

				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => resp.json())
				.then((json) => {
					results1 = json;
				});
		}
	}

	let results2 = [];

	async function selezionatorneo(id) {
		//per mandare l'id del torneo selezionato
		if (typeof localStorage != 'undefined') {
			fetch('http://192.168.58.55:8080/tournament/searchID', {
				method: 'post',
				body: JSON.stringify({ id }),
				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => resp.json())
				.then((json) => {
					results = json;
				});
			window.location.href = '/admin/cercaTorneo' + results;
		}
	}
</script>

<div id="container">
	<nav class="bg-light">
		<button
			class="btn btn-dark"
			type="button"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvasExample"
			aria-controls="offcanvasExample"
			id="sidebarbutton"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="19"
				height="19"
				fill="currentColor"
				class="bi bi-list"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
				/>
			</svg>
		</button>
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
			<form class="d-flex search-form" id="form">
				<input
					bind:value={ricerca}
					class="form-control"
					list="datalistOptions"
					id="list"
					placeholder="Cerca torneo"
				/>

				<datalist id="datalistOptions">
					{#each results1 as item, i}
						<option
							value={item.name}
							on:click={() => {
								selezionatorneo(item.ID_Tournament);
							}}
						/>
					{/each}
				</datalist>
				<button
					class="btn btn-outline-warning"
					type="submit"
					on:click|preventDefault={() => {
						cercaTorneo();
					}}>Cerca</button
				>
			</form>
			&nbsp &nbsp
			<a
				class="navbar-brand"
				href="#"
				on:click={() => {
					actionClick('/admin/Profilo');
				}}
			>
				<img
					src="https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg"
					alt="Profile banner"
					width="50"
					height="50"
				/>
			</a>
		</div>
	</nav>

	<div style="flex:1">
		<slot />
	</div>
	<div
		class="offcanvas offcanvas-start bg-dark"
		tabindex="-1"
		id="offcanvasExample"
		aria-labelledby="offcanvasExampleLabel"
	>
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="offcanvasExampleLabel">Home</h5>
			<button
				type="button"
				class="btn-close text-reset"
				data-bs-dismiss="offcanvas"
				aria-label="Close"
			/>
		</div>
		<div class="offcanvas-body">
			<div
				class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
				style="width:100% height:100%"
			>
				<a
					href="#"
					class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
					on:click={() => {
						actionClick('/admin/primo');
					}}
				>
					<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
					<span class="fs-4">Home</span>
				</a>
				<hr />
				<ul class="nav nav-pills flex-column mb-auto">
					<li class="side-item">
						<a
							href="#"
							class="nav-link text-white"
							class:active={link == 'admin/creazioneTorneo'}
							aria-current="page"
							on:click={() => {
								actionClick('/admin/creazioneTorneo');
							}}
						>
							<svg class="bi me-2" width="16" height="16"><use xlink:href="#home" /></svg>
							Crea un torneo
						</a>
					</li>
					<li class="side-item">
						<a href="#" class="nav-link text-white">
							<svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2" /></svg>
							Visualizza club
						</a>
					</li>
					<li class="side-item">
						<a href="#" class="nav-link text-white">
							<svg class="bi me-2" width="16" height="16"><use xlink:href="#table" /></svg>
							Visualizza torneo
						</a>
					</li>
					<li class="side-item">
						<a
							href="#"
							class="nav-link text-white"
							class:active={link == 'admin/creaClub'}
							on:click={() => {
								actionClick('/admin/creaClub');
							}}
						>
							<svg class="bi me-2" width="16" height="16"><use xlink:href="#grid" /></svg>
							Crea club
						</a>
					</li>
					<li class="side-item">
						<a href="#" class="nav-link text-white" on:click={() => logout()}>
							<svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle" /></svg>
							Logout
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div style="margin-top:auto">
		<FooterComponent />
	</div>
</div>

<style lang="scss" global>
	@import 'bootstrap/scss/bootstrap';

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	#form {
		margin-bottom: auto;
		margin-top: auto;
	}

	#sidebarbutton {
		margin-bottom: auto;
		margin-top: auto;
		margin-left: 4px;
	}

	.side-item:hover {
		background-color: rebeccapurple;
	}

	.side-item > .active {
		background-color: rebeccapurple !important;
	}

	#container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
