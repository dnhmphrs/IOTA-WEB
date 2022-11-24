<script>
	import Button from '$lib/components/common/button.svelte';
</script>

<main>
	<div class="shift">
		<div class="row">
			<p class="field" />
		</div>
		<div class="row ">
			<h4 class="title">iOTA</h4>
		</div>

		<div class="row muted">- noun</div>
		<br />
		<div class="row ">1. the ninth letter of the Greek alphabet.</div>
		<br />
		<div class="row ">2. an extremely small amount.</div>
		<br />
		<div class="row ">3. A mental state tracking application.</div>
		<br />

		<div class="row center muted">
			<Button text="learn more" size="lrg" disabled="true" />
			<a class="lrg" href="https://app.iota.health" target="_blank"
				><Button text="app beta" size="lrg" /></a
			>
		</div>
	</div>

	<div class="shadow" />
</main>

<style>
	main {
		position: absolute;
		top: 50%;
		left: 50%;

		width: 480px;
		max-width: calc(100vw - 62px);

		transform: translate(calc(-50% + 6px), -50%);
		background: var(--background);

		border: solid 1px var(--primary);
		padding: 40px;
		padding-bottom: 48px;
		color: var(--primary);
	}

	.shadow {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;

		height: 100%;
		width: 100%;
		transform: translate(calc(-50% - 13px), calc(-50% - 13px));
		background: var(--background);
		border: solid 1px var(--primary);
	}

	.shift {
		transform: translate(-12px, 0px);
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
		/* letter-spacing: 1px; */
	}

	.row {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.muted {
		color: var(--primary-50);
	}

	.row.center {
		justify-content: center;

		gap: 32px;
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
		padding-bottom: 8px;
	}

	@media only screen and (max-width: 768px) {
		main {
			padding: 32px;
			padding-bottom: 48px;
		}

		.row.center {
			gap: 24px;
		}
	}
</style>
