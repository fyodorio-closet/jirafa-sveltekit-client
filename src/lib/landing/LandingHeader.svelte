<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="logo">
		<img src="/favicon.png" alt="Logo" />
		<a class="logo-text" sveltekit:prefetch href="/">Jirafa</a>
	</div>
	<nav>
		<ul>
			<li class:active={$page.path === '/app'}><a sveltekit:prefetch href="/app">App</a></li>
			<li><a href="https://github.com/jirafahq/jirafa-sveltekit-client">GitHub</a></li>

			<li class="placeholder" />

			<li class:active={$page.path === '/signup'}>
				<a sveltekit:prefetch href="/signup">Signup</a>
			</li>
			<li class:active={$page.path === '/login'}><a sveltekit:prefetch href="/login">Login</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		height: 80px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.logo-text {
		font-weight: bold;
		color: black;
		font-size: 2rem;
	}
	nav {
		margin-left: 1rem;
		flex: auto;
	}
	a {
		text-decoration: none;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
	}
	li:not(:first-child) {
		margin-left: 1rem;
	}
	li.active {
		text-decoration: underline;
	}
	.placeholder {
		flex: auto;
	}
</style>
