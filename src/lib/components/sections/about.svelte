<script>
	import Button from '$lib/components/common/button.svelte';
</script>

<!-- <main>
	<div class="shift">

		<div class="row ">1. the ninth letter of the Greek alphabet.</div>
		<br />
		<div class="row ">2. an extremely small amount.</div>
		<br />
		<div class="row ">3. A mental state tracking application.</div>
		<br />

		<!-- <div class="row center muted">
			<Button text="learn more" size="lrg" disabled="true" />
			<a class="lrg" href="https://app.iota.health" target="_blank"
				><Button text="app beta" size="lrg" /></a
			>
		</div>>
	</div>

	<div class="shadow" />
</main> -->

<main>
	<h5>ABOUT</h5>
	<p class="xl">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</main>

<style>
	main {
		max-width: 1000px;

		display: flex;
		align-items: left;
		justify-content: center;
		gap: 80px;
	}

	p {
		text-transform: none;
		font-size: 22px;
	}

	@media only screen and (max-width: 768px) {
		main {
			flex-direction: column;
		}
	}
</style>
