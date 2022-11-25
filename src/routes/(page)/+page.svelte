<script>
	import Hero from '$lib/components/sections/hero.svelte';
	import Section from '$lib/components/sections/section.svelte';
	import Button from '$lib/components/common/button.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	import { screenType, sectionId } from '$lib/store/store';

	let loremIpsum =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat \
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	let loremShort =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
	// 	labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
</script>

<main>
	{#if $screenType == 1}
		<section id="iota" class="full">
			<Hero />
		</section>
	{/if}
	<!-- <nav>
		<div class="nav__tab active"><h6>ABOUT</h6></div>
		<div class="nav__tab"><h6>WHITE PAPER</h6></div>
		<div class="nav__tab"><h6>TIMELINE</h6></div>
		<div class="nav__tab end"><h6>APP</h6></div>
	</nav> -->
	<section id="whitepaper" class="opaque top full">
		<Section title="iOTA" subtitle="MENTAL STATE TRACKING" body={loremIpsum}>
			<Button size="xl" text="WHITEPAPER - IN PROGRESS" slot="slot1" disabled={true} />
			<a href="#research" slot="slot2"><Button size="xl" text="CURRENT MILESTONE" fluid={true} /></a
			>
		</Section>
	</section>

	<section id="research" class="">
		<Section title="MILESTONE 1" here={true} subtitle="RESEARCH APP" body={loremIpsum}>
			<Button size="xl" text="APP PRIVATE BETA" slot="slot1" />
		</Section>
	</section>
	<section id="analysis" class="">
		<Section title="MILESTONE 2" subtitle="ANALYSIS TOOL" body={loremIpsum} />
	</section>
	<section id="public" class="">
		<Section title="MILESTONE 3" subtitle="PUBLIC RELEASE" body={loremIpsum} />
	</section>
	<section id="ecosystem" class="">
		<Section title="MILESTONE 4" subtitle="ECOSYSTEM + PROTOCOL" body={loremIpsum} />
	</section>

	<footer id="contact" class="opaque alt">
		<Section title="CONTACT" subtitle="TEAM" body={loremShort}>
			<Button size="xl" text="EMAIL iOTA TEAM" slot="slot3" />
			<Button size="xl" text="DAN JOYCE WEBSITE" slot="slot1" />
			<Button size="xl" text="AUFBAU WEBSITE" slot="slot2" />
		</Section>
	</footer>
	<Footer />
</main>

<style>
	main {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
		scroll-behavior: smooth;
		/* background: var(--background-50); */

		height: 100%;
		width: 100%;

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

	section.full {
		min-height: calc(100% + 1px);
	}

	.opaque.top {
		color: var(--accent);
		background: var(--background-alt);
	}

	.opaque.alt {
		/* box-shadow: 0px -1px 8px #23232340, 0px 1px 8px #23232340; */
		z-index: 20;
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
		main {
			margin: 0 -2px;
			width: 101%;
		}

		section,
		footer {
			padding: 160px 32px;
		}
		.opaque.top {
			padding-top: 120px;
			color: var(--primary);
			background: var(--background);
		}
	}
</style>
