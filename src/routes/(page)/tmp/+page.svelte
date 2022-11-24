<script>
	import About from '$lib/components/sections/about.svelte';
</script>

<main>
	<header>
		<h1>iOTA</h1>
		<p>MENTAL STATE TRACKING</p>
	</header>
	<!-- <nav>
		<div class="nav__tab active"><h6>ABOUT</h6></div>
		<div class="nav__tab"><h6>WHITE PAPER</h6></div>
		<div class="nav__tab"><h6>TIMELINE</h6></div>
		<div class="nav__tab end"><h6>APP</h6></div>
	</nav> -->
	<section class="opaque">
		<About />
	</section>

	<section class="opaque eighty" />
	<section class="eighty" />

	<section class="opaque eighty" />
	<section class="eighty" />
	<section class="opaque alt" />
</main>

<style>
	main {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);

		height: 100%;
		width: 100%;

		display: flex;
		flex-flow: row wrap;
		overflow: auto;
	}

	header {
		width: 100%;

		height: calc(67%);

		display: flex;
		flex-flow: column nowrap;

		border-bottom: solid 1px var(--accent);
		background: var(--background-50);

		display: flex;
		align-items: center;
		justify-content: center;
	}

	header p {
		letter-spacing: 7.5px;
	}

	header h1 {
		margin-right: 6px;
		color: var(--accent);
		/* -webkit-text-stroke: 1px var(--primary); */
	}

	section {
		position: relative;
		width: 100%;
		height: auto;

		padding: 160px;
		background: var(--background-50);
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

	section.opaque.alt {
		background: var(--accent);
		height: 320px;
	}

	h5 {
		font-weight: 400;
	}

	@media only screen and (max-width: 768px) {
		header {
			height: 70%;
		}

		header h1 {
			margin-right: 0;
		}

		header p {
			letter-spacing: 0px;
		}
	}
</style>
