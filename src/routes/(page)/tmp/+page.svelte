<script>
</script>

<main>
	<header />
	<!-- <nav>
		<div class="nav__tab active"><h6>ABOUT</h6></div>
		<div class="nav__tab"><h6>WHITE PAPER</h6></div>
		<div class="nav__tab"><h6>TIMELINE</h6></div>
		<div class="nav__tab end"><h6>APP</h6></div>
	</nav> -->
	<section class="opaque" />
	<section />
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
		height: 40%;

		display: flex;
		justify-content: left;
		color: var(--accent);
		border-bottom: solid 1px var(--accent);
	}

	section {
		width: 100%;
		height: 100%;

		border-bottom: solid 1px var(--accent);

		display: flex;
		justify-content: left;
		color: var(--accent);
	}

	section.opaque {
		background: var(--background);
	}

	h5 {
		font-weight: 400;
	}

	@media only screen and (max-width: 768px) {
	}
</style>
