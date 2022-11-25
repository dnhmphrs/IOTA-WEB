<script>
	import Button from '$lib/components/common/button.svelte';
</script>

<header>
	<!-- <div /> -->
	<div class="title">
		<h1>iOTA</h1>
		<h6>MENTAL STATE TRACKING</h6>
	</div>
	<div class="buttonHolder">
		<a href="#whitepaper"
			><Button text="START: SITE BUILD IN PROGRESS" fluid={true} style="alt" /></a
		>
	</div>
</header>

<style>
	header {
		width: auto;
		padding: 60px 80px 80px 80px;
		margin-top: 30px;

		display: flex;
		flex-flow: column nowrap;
		background: var(--background-fallback);
		border-radius: 80px;
		border: solid 1px var(--outline-hero);

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 40px;
	}

	header h6 {
		letter-spacing: 7px;
		font-weight: 400;
		color: var(--primary);
	}

	header h1 {
		color: var(--black);
		-webkit-text-stroke: 1px var(--outline-text);
	}

	.buttonHolder {
		display: flex;
		gap: 16px;
		width: 100%;
	}

	.buttonHolder a {
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		header {
			width: 100%;
			height: 100%;
			padding: 60px 20px 80px 20px;
			align-items: center;
		}

		header h1 {
			-webkit-text-stroke: 0.5px var(--outline);
		}

		header h6 {
			letter-spacing: 0.3px;
			font-weight: 300;
		}
	}
</style>
