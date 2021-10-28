<svelte:head>
	<title>Create an account | Jirafa</title>
</svelte:head>

<h2>Create an account</h2>

<form method="POST" action="/signup">
	<fieldset>
		<label for="email">Email</label>
		<input id="email" type="email" placeholder="user@email.net" name="email" required />
		<label for="password">Password</label>
		<input id="password" type="password" placeholder="Your password" name="password" required />
		<label for="confirm-password">Password, again</label>
		<input
			id="confirm-password"
			type="password"
			placeholder="Repeat the password, please"
			name="repeat-password"
			required
		/>
		<input class="button-primary" type="submit" value="Signup" />
	</fieldset>
</form>
<p>Already have an account? <a href="/login">Login</a></p>

<style>
	fieldset {
		display: flex;
		flex-direction: column;
	}
</style>
