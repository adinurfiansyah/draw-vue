<template>
	<div v-on:click="handleOverlay" class="overlay">
		<div :style="{ left: x + 'px', top: y + 'px' }" v-on:click.stop class="content">
			<color-palette v-if="this.$bus.state.tool === 'fill'" />
			<width-palette v-if="this.$bus.state.tool === 'width'" />
		</div>
	</div>
</template>

<script>
import ColorPalette from './ColorPalette.vue';
import WidthPalette from './WidthPalette.vue';
export default {
	components: { ColorPalette, WidthPalette },
	props: ['x', 'y'],
};
</script>

<style lang="scss" scoped>
.overlay {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
	background: rgba(#000000, 0.7);
	.content {
		position: absolute;
		transform: translateX(-100%);
		width: 10vw;
		min-height: 10vw;
		background: var(--secondary);
		border-radius: 1.5vmax;
		padding: 2vmax 1.5vmax;
	}
}
</style>
