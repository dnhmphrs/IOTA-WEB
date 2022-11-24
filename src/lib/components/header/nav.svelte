<script>
	import { user } from '$lib/store/store';
	import { page } from '$app/stores';

	let loggedIn = false;

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
		<a href={navItem.href} class="lrg" class:active={navItem.href === $page.url.pathname}
			>{navItem.name}</a
		>
	{/each}

	<!-- <a href="https://aufbau.io" target="_blank">EIN AUFBAU DING</a> -->
</nav>

<style>
	nav {
		display: flex;
		flex-flow: comumn nowrap;
	}
	nav a,
	nav p {
		line-height: 110%;

		letter-spacing: 0.05em;
		padding: 16px;
		cursor: pointer;
	}

	nav a:hover {
		opacity: 0.6;
	}

	.active,
	.active:hover {
		opacity: 1;
	}
</style>
