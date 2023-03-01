<script>
	export let text = 'Button';
	export let size = '';
	export let active = false;
	export let disabled = false;
	export let fluid = false;
	export let alt = false;
	export let style = '';

	let classString = 'btn ' + size + ' ' + style;
	if (fluid) {
		classString = classString.concat(' ', 'fluid');
	}
	if (alt) {
		classString = classString.concat(' ', 'alt');
	}
	if (disabled) {
		classString = classString.concat(' ', 'disabled');
	} else {
		if (active) {
			classString = classString.concat(' ', 'active');
		}
	}
</script>

<button class={classString}>
	<p>{text}</p>
</button>

<style>
	button {
		text-transform: none;
		border: solid 1px var(--white);
		background: var(--black);
		color: var(--white);
		padding: 20px;
		border-radius: 24px;
		font-family: nb-architekt;
		letter-spacing: 0.2em;
	}

	button:hover,
	.active {
		color: #d9e69f;
		/* background: var(--button-alt); */
		border: solid 1px #d9e69f;
	}

	button:active {
		background: #d9e69f;
		color: var(--black);
		border: solid 1px var(--black);
	}

	button.fluid {
		width: 100%;
	}

	button.alt {
		border-color: var(--primary);
	}

	.disabled,
	.disabled:hover {
		opacity: 0.2;
		cursor: default;
		color: var(--white);
		background: var(--black);
		border: solid 1px var(--white);
	}
</style>
