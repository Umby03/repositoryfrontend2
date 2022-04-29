<script lang="ts">



	export let toggleHasAccount: () => void;

	let email: string;
	let password: string;

	async function Login() {
		const response = await fetch('http://192.168.58.55:8080/auth/login', {
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

		localStorage.setItem('Profilo', JSON.stringify(result));
		localStorage.setItem('token',result.token);


	}
</script>
<h1>Accedi</h1>

<form style="width:300px; margin-top:30px">
	<div class="mb-3">
		<label for="exampleInputEmail1" class="form-label"><h4>Email address</h4></label>
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
		<label for="exampleInputPassword1" class="form-label"><h4>Password</h4></label>
		<input  bind:value={password} type="password" class="form-control" id="exampleInputPassword1" />
	</div>
	<div class="mb-3 form-check">
		<input type="checkbox" class="form-check-input" id="exampleCheck1" />
		<label class="form-check-label" for="exampleCheck1">Check me out</label>
	</div>
	<button type="button" class="btn btn-outline-warning" on:click={Login} ><h4>Submit</h4></button>
</form>
<div class="btn btn-link" style="color:black; padding:0%; margin-top:10px; margin-bottom:10px" on:click={toggleHasAccount}>
	Non hai ancora un Account?
</div>
