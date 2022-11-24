<script>
	import Nav from './nav.svelte';
	import { darkMode, screenType } from '$lib/store/store';
	// stub data out
	const navItems = [
		{
			name: 'iOTA',
			href: ''
		},
		{
			name: 'WHITEPAPER',
			href: '#whitepaper'
		},
		{
			name: 'APP',
			href: '#app'
		},
		{
			name: 'SYSTEM',
			href: '#system'
		},
		{
			name: 'MILESTONES',
			href: '#milestones'
		},

		{
			name: 'CONTACT',
			href: '#contact'
		}
	];

	let toggleDarkMode = () => {
		darkMode.set(!$darkMode);
		document.querySelector(':root').classList.toggle('light-mode');
	};
</script>

<header>
	{#if $screenType == 1}
		<Nav {navItems} />
		<!-- <div on:click={() => toggleDarkMode()} class="darkMode">
		<p class:selected={$darkMode == false}>day</p>
		<p class="selected">/</p>
		<p class:selected={$darkMode == true}>night</p>
	</div> -->
	{/if}
</header>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;

		z-index: 20;

		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 20px;
		height: 60px;

		user-select: none;
		color: var(--primary);
		/* border-bottom: solid 1px var(--primary); */
		background: var(--background-50);
	}

	.darkMode {
		display: flex;
	}

	.darkMode p {
		line-height: 110%;

		letter-spacing: 0.05em;
		padding: 10px;
		cursor: pointer;
		opacity: 0.4;
	}

	.darkMode p.selected {
		opacity: 1;
	}
</style>
