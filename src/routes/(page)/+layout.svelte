<script>
	import '../../app.css';
	import Header from '$lib/components/header/header.svelte';
	import { onMount } from 'svelte';
	let Geometry;

	onMount(async () => {
		const module = await import('$lib/components/geometry/geometry.svelte');
		Geometry = module.default;
	});
</script>

{#key Geometry}
	<svelte:component this={Geometry} />
{/key}
<Header />
<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
	}
</style>
