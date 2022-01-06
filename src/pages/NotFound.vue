<template>
	<div class="pages">
		<h3>Sorry</h3>
		<p>The page you want is not available</p>
	</div>
	<!-- <div class="background">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#a2d9ff" fill-opacity="1" d="M0,256L480,96L960,64L1440,224L1440,320L960,320L480,320L0,320Z"></path>
		</svg>
	</div> -->
</template>

<script></script>

<style lang="scss" scoped>
.pages {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	&::before {
		content: ' ';
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: url('../assets/images/wave.svg') no-repeat top center;
		background-size: 171%;
		z-index: -1;
		// mix-blend-mode: screen;
	}

	h3 {
		mix-blend-mode: luminosity;
		font-size: 5vmax;
		color: var(--white);
	}
	p {
		mix-blend-mode: luminosity;
		font-size: 1.75vmax;
		color: var(--black);
	}
}
</style>
