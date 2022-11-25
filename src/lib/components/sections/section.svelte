<script>
	export let title;
	export let subtitle;
	export let body;

	import { screenType } from '$lib/store/store';
</script>

<main>
	<header>
		{#if $screenType == 3}
			<h3>{title}</h3>
		{:else}
			<h4>{title}</h4>
		{/if}
	</header>
	<section>
		<h4>{subtitle}</h4>
		<p class="xl">{body}</p>
		<slot />
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
	}

	section {
		display: flex;
		flex-flow: column nowrap;
		gap: 80px;
		width: 60%;
		min-width: 60%;
	}

	p {
		text-transform: none;
		font-size: 22px;
	}

	@media only screen and (max-width: 768px) {
		main {
			flex-direction: column;
		}

		header {
			width: 100%;
		}

		section {
			width: 100%;
		}
	}
</style>
