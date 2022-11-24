<script>
	import Nav from './nav.svelte';
	import { darkMode } from '$lib/store/store';
	// stub data out
	const navItems = [
		{
			name: 'IOTA',
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
	<Nav {navItems} />
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
		padding: 0 20px;
		height: 70px;
		/* border-bottom: solid 1px var(--accent); */
		user-select: none;
		color: var(--primary);
		border-bottom: solid 1px var(--primary);
		background: var(--background);
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
