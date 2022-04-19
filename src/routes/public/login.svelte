<script lang="ts">
	let hasAccount = true;
	const toggleHasAccount = () => {
		hasAccount = !hasAccount;
	};



	import LoginComponent from '../../components/loginComponent.svelte'
    import SignUpComponent from '../../components/signUpComponent.svelte'

	//ESEMPIO GET CON PROMISE

	/*function doRequestWithPromise() {
		const url = 'http://192.168.46.55:8080/ping';

		fetch(url)
			.then((result) => {
				result
					.json()
					.then((formattedJson) => {
						console.log(formattedJson);

					})
					.catch((err) => {
						console.error(err);
					})
					.finally(() => {
						console.info('done');
					});
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				console.info('done');
			});
	}


		//ESEMPIO GET CON FUNZIONE ASINCRONA E AWAIT

	async function doRequest() {
		try{
			const url = 'http://192.168.46.55:8080/ping';

const ciao = await fetch(url);
const formattedJson = await ciao.json();
console.log(formattedJson);
		} catch(err){
			console.error(err);

		} finally{
			console.info('done');

		}

	}
	
  //RICHIAMO FUNZIONI
	doRequest();

	doRequestWithPromise();*/
</script>

<div class="container">
	<div class="row align-items-start">
		<div class="col" />

		<div class="col">
			{#if hasAccount}

			<LoginComponent toggleHasAccount={toggleHasAccount} />
			{:else}

			<SignUpComponent toggleHasAccount={toggleHasAccount} />
				{/if}
		</div>

		<div class="col" />
	</div>
</div>

<style lang="scss" global>
	@import 'bootstrap/scss/bootstrap';
</style>
