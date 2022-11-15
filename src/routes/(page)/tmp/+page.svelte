<script>
	import { onMount } from 'svelte';
	import FormField from '$lib/components/common/formField.svelte';
	import Button from '$lib/components/common/button.svelte';
	// let Geometry;

	// onMount(async () => {
	// 	const module = await import('$lib/components/geometry/geometry.svelte');
	// 	Geometry = module.default;
	// });
</script>

<main>
	<header>
		<h4 class="title">IOTA</h4>
	</header>
	<nav>
		<div class="nav__tab active"><h6>ABOUT</h6></div>
		<div class="nav__tab"><h6>WHITE PAPER</h6></div>
		<div class="nav__tab"><h6>TIMELINE</h6></div>
		<div class="nav__tab end"><h6>APP</h6></div>
	</nav>
	<section>
		<div class="bg" />
	</section>

	<footer>footer</footer>
</main>

<style>
	header,
	footer {
		border: solid 1px var(--primary);
		padding: 20px;
	}

	main {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(calc(-50%), -50%);

		padding: 20px;

		height: 100%;
		width: 100%;

		max-width: 1540px;

		display: flex;
		flex-flow: row wrap;
	}

	header {
		width: 100%;
		margin-bottom: 20px;

		display: flex;
		justify-content: center;
	}

	nav {
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
	}

	.nav__tab {
		border-top: solid 1px var(--primary);
		border-left: solid 1px var(--primary);
		color: var(--primary);
		height: 40px;
		width: 200px;
		cursor: pointer;
		text-align: right;
		border-right: none;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav__tab.end {
		border-right: solid 1px var(--primary);
	}

	.nav__tab:hover {
		text-align: right;
		background: var(--primary);
		color: var(--primary);
	}

	.nav__tab.active {
		background: var(--background);
		color: var(--primary);
	}

	section {
		width: 100%;
		min-height: 71vh;

		border: solid 1px var(--primary);
		padding: 20px;

		overflow: hidden;
	}

	footer {
		height: auto;
		width: 100%;
		margin-top: 20px;
	}

	@media only screen and (max-width: 768px) {
	}
</style>
