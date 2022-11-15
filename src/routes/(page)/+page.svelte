<script>
	import FormField from '$lib/components/common/formField.svelte';
	import Button from '$lib/components/common/button.svelte';
</script>

<main>
	<div class="shift">
		<div class="row">
			<p class="field" />
		</div>
		<div class="row">
			<h4 class="title">IOTA</h4>
			<div>
				<p>mental state tracking</p>
				<Button text="→ enter" />
			</div>
		</div>
		<div class="row">
			<p class="field" />
		</div>
		<br />
	</div>

	<div class="shadow" />
</main>

<style>
	main {
		position: absolute;
		top: 50%;
		left: 50%;

		width: 400px;
		max-width: calc(100vw - 40px);

		transform: translate(calc(-50% + 5px), -50%);
		background: var(--background);

		border: solid 1px var(--primary-50);
		padding: 20px;
	}

	.shadow {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;

		height: 100%;
		width: 100%;
		transform: translate(calc(-50% - 10px), calc(-50% - 10px));
		background: var(--background);
		border: solid 1px var(--primary-50);
	}

	.shift {
		transform: translate(-5px, 0px);
	}

	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		border-radius: 0;
		background: none;
		border-bottom: solid 1px var(--primary);
		margin-bottom: 10px;
		width: 65%;
	}
	input:focus {
		outline: none;
	}

	h4 {
		font-family: nb-architekt;
	}

	.row {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.row.right {
		justify-content: end;
		margin-top: 10px;
	}

	.field {
		width: 35%;
		display: inline;
	}

	.title {
		width: 35%;
		display: inline;
	}

	form {
		padding-bottom: 10px;
	}

	@media only screen and (max-width: 768px) {
	}
</style>
