<script lang="ts">
	export let toggleHasAccount: () => void;

	let username: string;
	let surname: string;
	let email: string;
	let password: string;
	let ripetipassword: string;

	async function Signup() {
		console.log("blabalba")
		if (password == ripetipassword) {
			const response = await fetch('http://192.168.6.55:8080/auth/register', {
				method: 'post',

				body: JSON.stringify({
					username,
					surname,
					email,
					password
				}),

				headers: {
					'content-type': 'application/json'
				}
			})

			const result = await response.json()


		} else {
			alert('Le password non coincidono');
		}

	}
</script>

<h1>Registrati Adesso</h1>
<br />
<form style="width:300px;">
	<div class="input mb-3">
		<label for="username" class="form-label"><h3>Username</h3></label>

		<input
			bind:value={username}
			type="text"
			class="form-control"
			aria-label="Username"
			aria-describedby="basic-addon1"
			style="wight:20px;"
		/>
	</div>

	<div class="input mb-3">
		<label for="surname" class="form-label"><h3>Surname</h3></label>
		<input
			bind:value={surname}
			type="text"
			class="form-control"
			aria-label="Surname"
			aria-describedby="basic-addon1"
			style="wight:20px;"
		/>
	</div>

	<div class="mb-3">
		<label for="email" class="form-label"><h3>Email address</h3></label>
		<input
			bind:value={email}
			type="email"
			class="form-control"
			id="Email"
			aria-describedby="emailHelp"
			style="wight:20px;"
		/>
		<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
	</div>

	<div class="mb-3">
		<label for="password" class="form-label"><h3>Nuova Password</h3></label>
		<input bind:value={password} type="password" class="form-control" id="password" />
	</div>
	<div class="mb-3">
		<label for="password" class="form-label"><h3>Ripeti Password</h3></label>
		<input bind:value={ripetipassword} type="password" class="form-control" id="password" />
	</div>
	<!--<div class="mb-3 form-check">
		<input type="checkbox" class="form-check-input" id="check1" />
		<label class="form-check-label" for="check1">Check me out</label>
	</div>-->
	<button type="button" class="btn btn-outline-warning" on:click={Signup}><h3>Submit</h3></button>
</form>
<br /><br /><br />
<left>
	<div class="btn btn-link" on:click={toggleHasAccount}>
		<h4 style="color:black">Ho un Account</h4>
	</div>
</left>
