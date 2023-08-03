<script>
	import team from '$lib/images/icons/team.svg';
</script>

<section>
	<div class="main">
		<div class="icons">
			<img src={team} alt="team" class="icon" />
		</div>
		<h1>OUR TEAM</h1>
		<h4>Meet the Researchers Behind IOTA<br />-</h4>
		<p>1. Triin Ojakaar, CEO / MedTech Expert</p>
		<p>2. Prof. Dan Joyce, Research Collaborator</p>
		<p>3. Daniel Humphries, CTO / Lead Engineer</p>
	</div>
</section>

<style>
	section {
		padding: 0 0;
		height: 100%;
		width: 100%;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;

		align-items: center;
		text-align: center;

		overflow: auto;
	}

	.main {
		max-width: 1000px;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		gap: 10px;

		background: var(--background);
		color: var(--primary);
		border: var(--border);
		padding: 40px 48px;
	}

	.icons {
		display: flex;
		flex-flow: row;
		padding-bottom: 10px;
	}

	.icon {
		height: 60px;
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		.main {
			width: 80vw;
			gap: 16px;
			padding: 16px;
		}
	}
</style>
