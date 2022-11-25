<script>
	import Nav from './nav.svelte';
	import { darkMode, screenType } from '$lib/store/store';
	// stub data out
	const navItems = [
		{
			name: 'iOTA',
			href: '#iota'
		},
		{
			name: 'WHITEPAPER',
			href: '#whitepaper'
		},
		{
			name: 'RESARCH',
			href: '#research'
		},
		{
			name: 'ANALYSIS',
			href: '#analysis'
		},
		{
			name: 'PUBLIC',
			href: '#public'
		},
		{
			name: 'ECOSYSTEM',
			href: '#ecosystem'
		},
		{
			name: 'CONTACT',
			href: '#contact'
		}
	];

	let toggleDarkMode = () => {
		darkMode.set(!$darkMode);
		document.querySelector(':root').classList.toggle('dark-mode');
	};
</script>

<header>
	{#if $screenType == 1}
		<Nav {navItems} />
		<!-- <div class="app_link">
			<p>GO TO APP</p>
		</div> -->
	{/if}

	<div on:click={() => toggleDarkMode()} class="darkMode">
		<p class:selected={$darkMode == false}>day</p>
		<p class="selected">/</p>
		<p class:selected={$darkMode == true}>night</p>
	</div>
</header>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;

		z-index: 20;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
		font-size: 15px;
		height: 60px;

		user-select: none;
		color: var(--primary);
		border-bottom: solid 1px var(--primary-50);
		background: var(--background-header);
		box-shadow: 0px -1px 8px #23232320;
	}

	.darkMode {
		display: flex;
	}

	.app_link {
		opacity: 0.3;
	}

	.logo {
		padding: 20px 16px;
		font-family: untittled-serif;
		text-transform: none;
	}

	.tag {
		padding: 20px 16px;
	}

	.darkMode p {
		line-height: 110%;
		font-size: 15px;
		letter-spacing: 0.05em;
		padding: 10px;
		cursor: pointer;
		opacity: 0.4;
	}

	.darkMode p.selected {
		opacity: 1;
	}

	@media only screen and (max-width: 768px) {
		header {
			padding: 0 18px;
		}
	}
</style>
