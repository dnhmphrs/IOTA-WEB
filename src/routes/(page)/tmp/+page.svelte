<script>
	import Header from '$lib/components/sections/header.svelte';
	import Section from '$lib/components/sections/section.svelte';
	import Button from '$lib/components/common/button.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	import { screenType } from '$lib/store/store';

	let loremIpsum =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat \
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	let loremShort =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
</script>

<main>
	{#if $screenType == 1}
		<section>
			<Header />
		</section>
	{/if}
	<!-- <nav>
		<div class="nav__tab active"><h6>ABOUT</h6></div>
		<div class="nav__tab"><h6>WHITE PAPER</h6></div>
		<div class="nav__tab"><h6>TIMELINE</h6></div>
		<div class="nav__tab end"><h6>APP</h6></div>
	</nav> -->
	<section class="opaque top">
		<Section title="iOTA" subtitle="MENTAL STATE TRACKING" body={loremIpsum}>
			<Button size="xl" text="READ WITEPAPER" slot="slot1" />
		</Section>
	</section>

	<section class="">
		<Section title="MILESTONE 1" subtitle="RESEARCH APP" body={loremIpsum} />
	</section>
	<section class="">
		<Section title="MILESTONE 2" subtitle="ANALYSIS SYSTEM" body={loremIpsum} />
	</section>
	<section class="">
		<Section title="MILESTONE 3" subtitle="ECOSYSTEM + PROTOCOL" body={loremIpsum} />
	</section>

	<footer class="opaque alt">
		<Section title="CONTACT" subtitle="TEAM" body={loremShort} body2={loremShort}>
			<Button size="xl" text="DAN JOYCE WEBSITE" slot="slot1" />
			<Button size="xl" text="AUFBAU WEBSITE" slot="slot2" />
		</Section>
	</footer>
	<Footer />
</main>

<style>
	main {
		margin: 0 -2px;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
		/* background: var(--background-50); */

		height: 100%;
		width: 101%;

		display: flex;
		flex-flow: row wrap;
		overflow: auto;
	}

	section,
	footer {
		position: relative;
		width: 100%;
		height: auto;

		padding: 160px 40px;
		border-bottom: solid 1px var(--primary-50);

		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary);
	}

	section.opaque {
		background: var(--background);
	}

	section.gap {
		height: 60%;
	}

	.opaque.alt {
		box-shadow: 0px -1px 20px #23232310;
		color: var(--accent);
		background: var(--background-alt);
	}

	footer {
		min-height: 100%;
		background: var(--background-alt);
		border-bottom: none;
		padding-bottom: 80px;
	}

	h5 {
		font-weight: 400;
	}

	@media only screen and (max-width: 768px) {
		.top {
			padding-top: 120px;
		}
	}
</style>
