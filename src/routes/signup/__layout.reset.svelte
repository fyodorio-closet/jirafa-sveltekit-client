<script lang="ts">
	import AuthHeader from '$lib/auth/AuthHeader.svelte';
	import AuthFooter from '$lib/auth/AuthFooter.svelte';
</script>

<AuthHeader />

<main>
	<slot />
</main>

<AuthFooter />

<style>
	main {
		flex: auto;
	}
</style>
