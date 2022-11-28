<script>
	import Section from '$lib/components/sections/section.svelte';
	import Button from '$lib/components/common/button.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	let heroText =
		' IOTA is a research-oriented, mental-state tracking system. Our focus is advancing \
		  the nature of psychiatry research on individuals with schizophrenia, bipolar disorder, \
		 and related illnesses. Our goal is to improve understanding, and bring advanced healthcare to the public. \
		Read our whitepaper below, and scroll down to view future milestones. \
	';

	let researchText =
		"Current psychiatry research relies on 'Mental State Examinations' (MSEs) permformed  \
	at intervals of up to 6 weeks. Meanwhile, individuals living with these  disorders face  \
	the reality of every day being a completely different struggle. Our first goal is to bridge this \
	gap, creating a interval-based, mental-state tracking tool that can empower the next generation of psychiatry research. \
	This app is currently in development, and will be available as a private beta soon. \
	";

	let analysisText =
		"Once we have sufficient data from the private beta of the research app, the hard (fun) work of analysis \
	and integration with existing models of mental disorder begins. In doing so, we will build a web-based analysis tool \
	for clinical and computational psychiatrists working in our research area. The focus of the tool will be analysing mental-state trajectories \
	(how an individual's mental-state changes day-by-day) and clinical outcomes (how a course of treatment improves an individual's mental health). \
	Publication of findings will then follow. \
	";

	let ecosystemText =
		"Science doesn't exist in a vacuum, nor should we as initiatives or researchers aim to. Related research tools are being \
	developed in psychiatry labs around the world, and a major focus of ours is to build a collaborative and connected ecosystem \
	of modernised psychiatry research. To acheive this, we will collaborate with our international colleagues to develop \
	standards and protocols that best enable the sharing and integration of mental-state data in a privacy-focussed manner. By following \
	an ethics-first, not-for-profit model, we can bring advanced healthcare to the public without sacrificing on values.";

	let puclicText =
		'Once we have reached a sufficient maturity in our findings, we aim to bring the benefits of advanced \
	healthcare to the public - for free. We believe free healthcare is a universal human right, and \
	while hospitals and medication are a necessary feature of mental health treatment, more can be done to ensure \
	no-one is barred from accessing the support they need. We will work with medical and regulatory bodies to ensure as many people \
	as possible around the world can take their mental health into their own hands. No one should pay to feel human. \
	';

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
			<Button size="xl" text="WHITEPAPER - IN PROGRESS" slot="slot1" />
			<!-- <a click:prevent href="#research" slot="slot2"
				><Button size="xl" text="CURRENT MILESTONE" fluid={true} /></a
			> -->
		</Section>
	</section>

	<section id="research" class="">
		<Section title="MILESTONE 1" here={true} subtitle="RESEARCH APP" body={researchText}>
			<a href="https://app.iota.health" target="_blank" slot="slot1">
				<Button size="xl" text="APP PRIVATE BETA" />
			</a>
		</Section>
	</section>
	<section id="analysis" class="">
		<Section title="MILESTONE 2" subtitle="ANALYSIS + TOOL" body={analysisText} />
	</section>

	<section id="ecosystem" class="">
		<Section title="MILESTONE 3" subtitle="ECOSYSTEM + PROTOCOL" body={ecosystemText} />
	</section>
	<section id="public" class="">
		<Section title="MILESTONE 4" subtitle="PUBLIC RELEASE" body={puclicText} />
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

	footer a {
		width: 100%;
	}

	section.opaque {
		background: var(--background);
	}

	.top {
		padding: 160px;
	}

	.opaque.alt {
		/* box-shadow: 0px -1px 8px #23232340, 0px 1px 8px #23232340; */
		z-index: 20;
		color: var(--accent);
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

		.opaque.top {
			padding-top: 120px;
			color: var(--primary);
			background: var(--background);
		}
	}
</style>
