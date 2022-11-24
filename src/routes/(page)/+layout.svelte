<script>
	import '../../app.css';
	import { onMount } from 'svelte';
	let Geometry;

	onMount(async () => {
		const module = await import('$lib/components/geometry/geometry.svelte');
		Geometry = module.default;
	});
</script>

{#key Geometry}
	<svelte:component this={Geometry} class="geometry" />
{/key}
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

	.geometry {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -10;
	}
</style>
