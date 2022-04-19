<script lang="ts">
	export let toggleHasAccount: () => void;

	let email: string;
	let password: string;

	async function Signup() {
		const response = await fetch('http://192.168.6.55:8080/auth/register', {
			method: 'post',

			body: JSON.stringify({
				email,
				password
			}),

			headers: {
				'content-type': 'application/json'
			}
		});

		const result = await response.json();
	}
</script>

<h1>Accedi</h1>
<br />
<form style="width:300px;">
	<div class="mb-3">
		<label for="exampleInputEmail1" class="form-label"><h3>Email address</h3></label>
		<input
		  bind:value={email}
			type="email"
			class="form-control"
			id="exampleInputEmail1"
			aria-describedby="emailHelp"
			style="wight:20px;"
		/>
		<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
	</div>
	<div class="mb-3">
		<label for="exampleInputPassword1" class="form-label"><h3>Password</h3></label>
		<input  bind:value={password} type="password" class="form-control" id="exampleInputPassword1" />
	</div>
	<div class="mb-3 form-check">
		<input type="checkbox" class="form-check-input" id="exampleCheck1" />
		<label class="form-check-label" for="exampleCheck1">Check me out</label>
	</div>
	<button type="button" class="btn btn-outline-warning" ><h3>Submit</h3></button>
</form>
<br /><br /><br />
<div class="btn btn-link" on:click={toggleHasAccount}>
	<h4 style="color:black">Non hai ancora un Account?</h4>
</div>
