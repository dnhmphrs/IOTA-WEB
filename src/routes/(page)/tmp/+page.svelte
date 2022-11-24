<script>
</script>

<main>
	<header>
		<h1>iOTA</h1>
	</header>
	<!-- <nav>
		<div class="nav__tab active"><h6>ABOUT</h6></div>
		<div class="nav__tab"><h6>WHITE PAPER</h6></div>
		<div class="nav__tab"><h6>TIMELINE</h6></div>
		<div class="nav__tab end"><h6>APP</h6></div>
	</nav> -->
	<section class="opaque" />

	<section />
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

		height: 67%;

		display: flex;
		justify-content: left;
		color: var(--accent);
		border-bottom: solid 1px var(--primary);

		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1 {
		color: var(--background);
		-webkit-text-stroke: 1px var(--accent);
	}

	section {
		width: 100%;
		height: 80%;

		border-bottom: solid 1px var(--primary);

		display: flex;
		justify-content: left;
		color: var(--primary);
	}

	section.opaque {
		background: var(--background);
	}

	section.opaque.alt {
		background: var(--accent);
		height: 400px;
	}

	h5 {
		font-weight: 400;
	}

	@media only screen and (max-width: 768px) {
		header {
			height: 95%;
		}
	}
</style>
