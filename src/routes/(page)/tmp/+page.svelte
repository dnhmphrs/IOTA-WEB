<script>
	import About from '$lib/components/sections/about.svelte';
	import { screenType } from '$lib/store/store';
</script>

<main>
	{#if $screenType == 1}
		<header>
			<h1>iOTA</h1>
			<h6>MENTAL STATE TRACKING</h6>
		</header>
	{/if}
	<!-- <nav>
		<div class="nav__tab active"><h6>ABOUT</h6></div>
		<div class="nav__tab"><h6>WHITE PAPER</h6></div>
		<div class="nav__tab"><h6>TIMELINE</h6></div>
		<div class="nav__tab end"><h6>APP</h6></div>
	</nav> -->
	<section class="opaque alt">
		<About />
	</section>

	<section class="opaque eighty" />
	<section class="eighty" />

	<section class="opaque eighty" />
	<section class="eighty" />
	<footer />
</main>

<style>
	main {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
		/* background: var(--background-50); */

		height: 100%;
		width: 100%;

		display: flex;
		flex-flow: row wrap;
		overflow: auto;
	}

	header {
		width: 100%;

		height: 76%;

		display: flex;
		flex-flow: column nowrap;

		border-bottom: solid 1px var(--accent);

		display: flex;
		align-items: center;
		justify-content: center;
	}

	header h6 {
		margin-left: 8px;
		letter-spacing: 7px;
		font-weight: 400;
		color: var(--accent);
	}

	header h1 {
		color: var(--accent);
		/* -webkit-text-stroke: 1px var(--primary); */
	}

	section,
	footer {
		position: relative;
		width: 100%;
		height: auto;

		padding: 160px 40px;
		border-bottom: solid 1px var(--accent);

		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary);
	}

	section.opaque {
		background: var(--background);
	}

	section.eighty {
		height: 80%;
	}

	section.end {
		height: 50%;
	}

	section.opaque.alt {
		background: var(--background-alt);
	}

	footer {
		background: var(--background);
		border-bottom: none;
	}

	h5 {
		font-weight: 400;
	}

	@media only screen and (max-width: 768px) {
		header {
			height: calc(100% - 60px);
		}

		header h6 {
			letter-spacing: 0.3px;
			font-weight: 300;
			margin-left: 0;
		}
	}
</style>
