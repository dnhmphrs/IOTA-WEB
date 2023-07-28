<script>
</script>

<section>
<div class="main">
  <h1>OUR MISSION<br>-</h1>
	<p>thing 1</p>
	<p>thing 2</p>
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

	@media only screen and (max-width: 768px) {
		.main {
			width: 80vw;
			gap: 16px;
		}
	}
</style>
