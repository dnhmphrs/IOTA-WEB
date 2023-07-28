<script>
	import { page } from '$app/stores';
	import { screenType } from '$lib/store/store';

	export let navItems = [];
	export async function load() {
		return {
			props: {
				navItems
			}
		};
	}
</script>

<nav>

	{#each navItems as navItem}
		<a href={navItem.href} class="" class:active={navItem.href === $page.url.pathname}
			>{navItem.name}</a
		>
	{/each}

	<!-- <a href="https://aufbau.io" target="_blank">EIN AUFBAU DING</a> -->
</nav>

<style>
	nav {
		align-self: baseline;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		background: var(--background);
		color: var(--primary);
		border: var(--border);
	}
	nav a,
	nav p {
		padding: 10px 10px;
		font-size: 13px;
		cursor: pointer;
		color: inherit;
	}

	nav a:hover {
		opacity: 0.6;
	}

	nav a.active {
		font-weight: 500;
	}

	.active,
	.active:hover {
		opacity: 1;
	}

	@media only screen and (max-width: 768px) {
		nav {
			width: 80vw;
		}
	}
</style>
