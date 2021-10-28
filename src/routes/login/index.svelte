<svelte:head>
	<title>Login | Jirafa</title>
</svelte:head>

<h2>Login</h2>
<form method="POST" action="/login">
	<fieldset>
		<label for="email">Email</label>
		<input id="email" type="email" placeholder="user@email.net" name="email" />
		<label for="password">Password</label>
		<input id="password" type="password" placeholder="Your password" name="password" />
		<input class="button-primary" type="submit" value="Login" />
	</fieldset>
</form>
<p>Don't have an account? <a href="/signup">Signup</a></p>

<style>
	fieldset {
		display: flex;
		flex-direction: column;
	}
</style>
