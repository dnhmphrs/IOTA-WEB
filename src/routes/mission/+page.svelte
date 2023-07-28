<script>
		import mission from '$lib/images/icons/mission.svg';
</script>

<section>
<div class="main">
	<div class="icons">
		<img src={mission} alt="mission" class="icon" />
	</div>
  <h1>OUR MISSION</h1>
	<h4>Unleashing the Power of Data for Mental Well-being<br>-</h4>
	<p>1. Provide the industry's leading mental health tracking tool.</p>
	<p>2. Empower individuals to understand and optimize their mental well-being.</p>
	<p>3. Revolutionize mental health care through groundbreaking research collaborations.</p>
	<p>4. Create a stigma-free environment by promoting awareness and acceptance of daily mental health challenges.</p>
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
		padding:  40px 48px;
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
			padding:  16px;
		}
	}
</style>
