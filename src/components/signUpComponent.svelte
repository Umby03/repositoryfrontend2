<script lang="ts">
	export let toggleHasAccount: () => void;

	let username: string;
	let surname: string;
	let email: string;
	let password: string;
	let ripetipassword: string;
	const controlloemail = email.includes('@');

	async function Signup() {
		if (controlloemail == true) {
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
				});

				const result = await response.json();
				window.location.href='/admin/login';
			} else {
				alert('Le password non coincidono');
			}
		} else {
			alert(' Email non valida ');
		}
	}
</script>

<h1>Registrati Adesso</h1>
<br />
<form class="row g-3 needs-validation" style="width:300px;">
	<div class="input mb-3">
		<label for="username" class="form-label" style="margin-bottom:0%"><h5>Username</h5></label>

		<input
			bind:value={username}
			type="text"
			class="form-control"
			aria-label="Username"
			aria-describedby="basic-addon1"
			style="wight:20px;"
			required
		/>
		<!--<div class="valid-feedback">Corretto!</div>-->
	</div>

	<div class="input mb-3">
		<label for="surname" class="form-label" style="margin-bottom:0%"><h5>Surname</h5></label>
		<input
			bind:value={surname}
			type="text"
			class="form-control"
			aria-label="Surname"
			aria-describedby="basic-addon1"
			style="wight:20px;"
			required
		/>
		<div class="valid-feedback">Corretto!</div>
	</div>

	<div class="mb-3">
		<label for="email" class="form-label" style="margin-bottom:0%"><h5>Email address</h5></label>
		<input
			bind:value={email}
			type="email"
			class="form-control"
			id="Email"
			aria-describedby="emailHelp"
			style="wight:20px;"
			required
		/>
		<div class="valid-feedback">Corretto!</div>
		<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
	</div>

	<div class="mb-3">
		<label for="password" class="form-label" style="margin-bottom:0%"><h5>Nuova Password</h5></label
		>
		<input bind:value={password} type="password" class="form-control" id="password" required />
		<div class="valid-feedback">Corretto!</div>
	</div>
	<div class="mb-3">
		<label for="password" class="form-label" style="margin-bottom:0%"
			><h5>Ripeti Password</h5></label
		>
		<input
			bind:value={ripetipassword}
			type="password"
			class="form-control"
			id="password"
			required
		/>
		<div class="valid-feedback">Corretto!</div>
	</div>
	<!--<div class="mb-3 form-check">
		<input type="checkbox" class="form-check-input" id="check1" />
		<label class="form-check-label" for="check1">Check me out</label>
	</div>-->
	<center>
		<button type="button" class="btn btn-outline-warning" on:click={Signup}><h4>Submit</h4></button>

		<br />
		<div
			class="btn btn-link"
			style="color:black; padding:0px; margin-top:20px; margin-bottom:10px;"
			on:click={toggleHasAccount}
		>
			Ho un Account
		</div>
	</center>
</form>
