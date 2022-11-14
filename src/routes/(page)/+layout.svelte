<script>
	import '../../app.css';
	import Header from '$lib/components/header/header.svelte';
</script>

<svelte:head>
	<title>IOTA</title>
</svelte:head>

<!-- <Header /> -->

<main>
	<slot />
</main>

<style>
	main {
		width: 100vw;
		height: 100%;

		display: flex;
		justify-content: center;
	}
</style>
