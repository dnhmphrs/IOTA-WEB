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
	<section class="opaque alt">
		<About />
	</section>

	<section class="opaque eighty" />
	<section class="eighty" />

	<section class="opaque eighty" />
	<section class="eighty" />
	<section class="opaque alt fifty" />
</main>

<style>
	main {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
		background: var(--background-50);

		height: 100%;
		width: 100%;

		display: flex;
		flex-flow: row wrap;
		overflow: auto;
	}

	header {
		width: 100%;

		height: 75%;

		display: flex;
		flex-flow: column nowrap;

		border-bottom: solid 1px var(--accent);

		display: flex;
		align-items: center;
		justify-content: center;
	}

	header p {
		margin-left: 14px;
		letter-spacing: 7.5px;
		font-weight: 400;
		background: var(--background-50);
	}

	header h1 {
		color: var(--accent);
		background: var(--background-50);
		/* -webkit-text-stroke: 1px var(--primary); */
	}

	section {
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

	section.fifty {
		height: 50%;
	}

	section.opaque.alt {
		background: var(--accent);
		color: var(--background);
	}

	h5 {
		font-weight: 400;
	}

	@media only screen and (max-width: 768px) {
		header {
			height: 75%;
		}

		header p {
			letter-spacing: 0px;
			margin-left: 0;
		}
	}
</style>
