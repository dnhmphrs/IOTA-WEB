<script>
	export let text = 'Button';
	export let size = '';
	export let active;
	export let disabled;

	let classString = 'btn';
	if (disabled) {
		classString = size.concat(' ', 'btn disabled');
	} else {
		if (active) {
			classString = size.concat(' ', 'btn active');
		} else {
			classString = 'btn ' + size;
		}
	}
</script>

<button>
	<p class={classString}>{text}</p>
</button>

<style>
	button {
		text-transform: uppercase;
		border: solid 1px var(--accent);
		background: var(--black);
		color: var(--accent);
		padding: 20px;
		border-radius: 10px;
	}

	button:hover,
	.active {
		color: var(--black);
		background: var(--button-alt);
		border: solid 1px var(--primary);
	}

	button:active {
		color: var(--accent);
	}

	.disabled,
	.disabled:hover {
		opacity: 0.2;
		cursor: default;
		color: var(--primary);
	}
</style>
