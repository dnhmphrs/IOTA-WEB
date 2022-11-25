<script>
	import FormField from '$lib/components/common/formField.svelte';
	import Button from '$lib/components/common/button.svelte';
</script>

<main>coming soon</main>

<style>
	main {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 200px;

		transform: translate(-50%, -50%);
		background: var(--button-alt);
		color: var(--primary);

		border: solid 1px var(--primary);
		padding: 20px 40px;
		border-radius: 10px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media only screen and (max-width: 768px) {
	}
</style>
