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
			<p>[ CURRENT MILESTONE ]</p>
		{/if}
	</header>

	<section>
		<h4>{subtitle}</h4>
		<slot name="slot3" />
		<p class="xl">{body}</p>
		<slot name="slot1" />
		{#if body2}
			<p class="xl">{body2}</p>
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
	}

	header p {
		letter-spacing: 1.8px;
		padding-bottom: 40px;
	}

	section {
		display: flex;
		flex-flow: column nowrap;
		gap: 80px;
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

		.header h3 {
			font-size: 40px;
		}

		h4 {
			color: var(--toggle);
		}

		header {
			width: 100%;
		}

		section {
			width: 100%;
			gap: 60px;
		}
	}
</style>
