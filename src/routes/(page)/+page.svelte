<script>
	import Section from '$lib/components/sections/section.svelte';
	import Button from '$lib/components/common/button.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	let heroText =
		' IOTA is a research-oriented, mental-state tracking app run by two UK academics. Our focus is advancing \
		  the nature of psychiatry research on individuals with schizophrenia, bipolar, \
		 and related illnesses. Read our whitepaper below, and scroll down to view our plans + milestones. \
	';

	let researchText =
		"Current psychiatry research relies on 'Mental State Examinations' (MSEs) permformed  \
	at intervals of up to 6 weeks. Meanwhile, individuals living with these  disorders face  \
	the reality of every day being a unique challenge. Our first goal is to bridge this \
	gap, creating a interval-based, mental-state tracking tool to collect research data. \
	This app is currently in development. A beta release is coming soon. \
	";

	let analysisText =
		"Once we have sufficient data from the app private beta, we will run our analysis and compare against existing models of mental disorder. \
	The focus of this work will be analysing mental-state trajectories \
	(how an individual's mental-state changes day-by-day) and clinical outcomes (how a course of treatment improves an individual's mental health). \
	Publication of initial findings will then follow. \
	";

	let puclicText =
		'Once we have reached a sufficient maturity in our findings, we will release the app to the wider public. \
		We believe free healthcare is a universal human right, so using the app will be free for anyone who needs it.\
	While hospitals and medication are a necessary feature of mental health treatment, more can be done to ensure \
	no-one is barred from accessing the support they need.';

	let ecosystemText =
		"Science doesn't exist in a vacuum, nor should we as initiatives or researchers aim to. Related research tools are being \
	developed in psychiatry labs around the world, and a major focus of ours is to build a collaborative and connected ecosystem \
	of modernised psychiatry. To achieve this, we will collaborate with our international colleagues to develop \
	standards and protocols that best enable the secure integration of mental-state data across systems. By following \
	an ethics-first, not-for-profit model, we can bring advanced healthcare to the public without sacrificing on our values or the privacy of your data.";

	let contactText =
		'IOTA is the joint-initiative of two UK-based individuals. The brains of the project is Dan Joyce,\
		Consultant Psychiatrist (NHS) and Senior Clinical Research Fellow (University of Oxford). \
		The easier stuff - design and development - is handled by Dan Humphries (Aufbau). \
	';
</script>

<main>
	<!-- {#if $screenType == 1}
		<section id="iota" class="full">
			<Hero />
		</section>
	{:else} -->
	<section id="iota" class="top" />
	<!-- {/if} -->

	<section id="whitepaper" class="opaque">
		<Section title="IOTA" subtitle="MENTAL STATE TRACKING" body={heroText} header={true}>
			<Button size="xl" text="WHITEPAPER - IN PROGRESS" fluid={true} slot="slot1" />
			<!-- <a click:prevent href="#research" slot="slot2"
				><Button size="xl" text="CURRENT MILESTONE" fluid={true} /></a
			> -->
		</Section>
	</section>

	<section id="research" class="">
		<Section title="MILESTONE 1" here={true} subtitle="RESEARCH + Development" body={researchText}>
			<a href="https://app.iota.health" target="_blank" slot="slot1">
				<Button size="xl" text="APP PRIVATE BETA" fluid={true} />
			</a>
		</Section>
	</section>
	<section id="analysis" class="">
		<Section title="MILESTONE 2" subtitle="DATA ANALYSIS" body={analysisText} />
	</section>
	<section id="app" class="">
		<Section title="MILESTONE 3" subtitle="APP RELEASE" body={puclicText} />
	</section>
	<section id="ecosystem" class="">
		<Section title="MILESTONE 4" subtitle="ECOSYSTEM + PROTOCOL" body={ecosystemText} />
	</section>

	<footer id="contact" class="opaque alt">
		<Section title="CONTACT" subtitle="IOTA TEAM" body={contactText}>
			<a href="mailto: dan@aufbau.io" target="_blank" slot="slot3">
				<Button size="xl" text="EMAIL iOTA TEAM" fluid={true} />
			</a>
			<a href="https://www.danwjoyce.com" target="_blank" slot="slot1">
				<Button size="xl" text="DAN JOYCE WEBSITE" fluid={true} />
			</a>
			<a href="https://aufbau.io" target="_blank" slot="slot2">
				<Button size="xl" text="AUFBAU WEBSITE" fluid={true} />
			</a>
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
		width: 100%;
		height: auto;

		padding: 160px 40px;
		border-bottom: solid 1px var(--primary-50);

		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary);
	}

	section a,
	footer a {
		width: 100%;
	}

	section.opaque {
		background: var(--background);
	}

	section.semi-opaque {
		background: var(--background-50);
	}

	.top {
		padding: 160px;
	}

	.opaque.alt {
		/* box-shadow: 0px -1px 8px #23232340, 0px 1px 8px #23232340; */
		z-index: 20;
		color: var(--white);
		background: var(--background-alt);
	}

	footer {
		min-height: calc(100% - 60px);
		background: var(--background-alt);
		border-bottom: none;
		padding-top: 120px;
		padding-bottom: 60px;
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
			padding: 120px 32px;
		}

		section.top {
			padding: 100px 0;
		}

		footer {
			padding-bottom: 64px;
		}

		.opaque.top,
		.semi-opaque.top {
			padding-top: 120px;
			color: var(--primary);
			background: var(--background);
		}
	}
</style>
