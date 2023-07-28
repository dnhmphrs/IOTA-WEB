<script>
		import www from '$lib/images/icons/www.svg';
</script>

<section>
	<div class="main">
		<div class="icons">
			<img src={www} alt="team" class="icon" />
		</div>
		<h1>IOTA</h1>
		<h4>Mental Health, Updated.<br/>-</h4>
		<p>Discover the future of mental health with IOTA.</p>
		<p>Our premier mental health tracking tools aims to revolutionizing the way we understand and approach mental well-being.</p>
		<p>Together, we can break the barriers of stigma and build a brighter, healthier world.</p>
	</div>
	
</section>

<style>
	section {
		padding: 0 20%;
		height: 100%;
		width: 100%;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;

		align-items: center;
		text-align: center;

		/* background: var(--primary-50); */
		overflow: auto;
	}

	.main {
		max-width: 800px;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		gap: 10px;

		background: var(--background);
		color: var(--primary);
		border: var(--border);
		padding:  40px 48px;
	}

	.icons {
		display: flex;
		flex-flow: row;
		padding-bottom: 16px;
	}

	.icon {
		height: 60px;
		width: 100%;
	}


	@media only screen and (max-width: 768px) {
		.main {
			width: 80vw;
			gap: 16px;
			padding:  16px;
		}
	}
</style>
