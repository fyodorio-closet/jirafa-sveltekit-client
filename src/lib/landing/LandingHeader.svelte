<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/app'}><a sveltekit:prefetch href="/app">App</a></li>
			<li class:active={$page.path === '/signup'}>
				<a sveltekit:prefetch href="/signup">Signup</a>
			</li>
			<li class:active={$page.path === '/login'}><a sveltekit:prefetch href="/login">Login</a></li>
		</ul>
	</nav>
</header>

<style>
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
</style>
