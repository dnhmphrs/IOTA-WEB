<script>
	export let title;
	export let subtitle;
	export let body;
	export let here = false;
	export let header = false;

	export let body2;

	import { screenType } from '$lib/store/store';
</script>

<main>
	<header class:header>
		{#if $screenType == 3}
			<h3>{title}</h3>
		{:else}
			<h4>{title}</h4>
		{/if}
		{#if here}
			<p>[ WE ARE HERE ]</p>
		{/if}
	</header>

	<section class:header>
		<h4>{subtitle}</h4>
		<slot name="slot3" />
		<p class="lrg">{body}</p>
		<slot name="slot1" />
		{#if body2}
			<p class="lrg">{body2}</p>
		{/if}
		<slot name="slot2" />
	</section>
</main>

<style>
	main {
		width: 100%;
		max-width: 1200px;

		display: flex;
		justify-content: center;
		gap: 20px 20px;
	}

	header {
		width: 30%;
		min-width: 30%;
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding-bottom: 40px;
	}

	header p {
		letter-spacing: 6.9px;
	}

	h4,
	h3 {
		font-family: nb-architekt;
		font-weight: 500;
		font-size: 36px;
		letter-spacing: 0.12em;
	}

	section {
		display: flex;
		flex-flow: column nowrap;
		gap: 54px;
		width: 60%;
		min-width: 60%;
	}

	section p {
		text-transform: none;
		font-size: 22px;
	}

	@media only screen and (max-width: 768px) {
		main {
			flex-direction: column;
		}

		header.header {
			padding-bottom: 0;
		}

		header p {
			letter-spacing: 8px;
		}

		section p {
			text-transform: none;
			font-size: 18px;
		}

		header p {
			letter-spacing: 3.9px;
			font-size: 16px;
		}

		header {
			width: 100%;
		}

		.header h4 {
			font-size: 21.4px;
			letter-spacing: 0.12em;
		}

		.header h3 {
			font-size: 36px;
		}

		h3 {
			font-size: 23.5px;
			letter-spacing: 0.12em;
		}

		section {
			width: 100%;
			gap: 48px;
		}
	}
</style>
