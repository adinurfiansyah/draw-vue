<template>
	<div v-on:click="handleOverlay" class="overlay-fill">
		<div :style="{ left: x + 'px', top: y + 'px' }" v-on:click.stop class="fill">
			<div class="color" v-for="color in colors" v-bind:key="color" :style="{ background: color }" v-on:click="handleColor(color)"></div>
		</div>
	</div>
</template>

<script>
export default {
	inject: ['canvasStore'],
	name: 'ColorPalette',
	props: ['x', 'y'],
	methods: {
		handleColor(color) {
			this.canvasStore.setColor(color);
			this.canvasStore.setTool('pencil');
		},
		handleOverlay() {
			this.canvasStore.setTool(false);
		},
	},
	data() {
		return {
			colors: ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6', '#000000', '#ffffff'],
		};
	},
};
</script>

<style lang="scss" scoped>
$clrSecondary: #664ed8;
.overlay-fill {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
	background: rgba(#000000, 0.7);
	.fill {
		position: absolute;
		transform: translateX(-100%);
		// transform: translate(-50%, 50%);
		width: 10vw;
		min-height: 10vw;
		background: $clrSecondary;
		border-radius: 1.5vmax;
		padding: 2vmax 1.5vmax;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		> * {
			width: calc(100% / 2.5);
			margin: 0 auto 15px;
			height: 5vmin;
			cursor: pointer;
            &:hover, &.active {
				filter: brightness(1.2);
				background: white;
				i {
					color: black;
				}
			}
		}
	}
}
</style>
