<script>
</script>

<header>
	<h1>iOTA</h1>
	<h6>MENTAL STATE TRACKING</h6>
</header>

<style>
	header {
		width: 100%;
		padding: 88px 40px;

		display: flex;
		flex-flow: column nowrap;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	header h6 {
		margin-left: 8px;
		letter-spacing: 7px;
		font-weight: 400;
		color: var(--primary);
	}

	header h1 {
		color: var(--primary);
		/* -webkit-text-stroke: 1px var(--primary); */
	}

	@media only screen and (max-width: 768px) {
		header {
			height: 0;

			background: var(--background);
			border-bottom: none;
			align-items: center;
		}

		header h6 {
			letter-spacing: 0.3px;
			font-weight: 300;
			margin-left: 0;
		}
	}
</style>
