<template>
	<div v-on:click="handleOverlay" class="overlay">
		<div :style="{ left: x + 'px', top: y + 'px' }" v-on:click.stop class="fill">
			<div class="color" v-for="width in listWidth" v-bind:key="width" v-on:click="handleWidth(width)">
				<div :style="{ borderWidth: width + 'px', height: width + 'px' }" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	inject: ['canvasStore'],
	name: 'WidthPalette',
	props: ['x', 'y'],
	methods: {
		handleWidth(w) {
			this.canvasStore.setWidth(w);
			this.canvasStore.setTool('pencil');
		},
		handleOverlay() {
			this.canvasStore.setTool(false);
		},
	},
	data() {
		return {
			listWidth: [1, 5, 10],
		};
	},
};
</script>

<style lang="scss" scoped>
$clrSecondary: #664ed8;
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
		// flex-wrap: wrap;
        flex-direction: column;
		align-content: flex-start;
		> * {
            width: 100%;
			margin: 0 auto 15px;
			cursor: pointer;
            &:hover, &.active {
				filter: brightness(1.2);
				background: white;
				* {
					border: 1px solid black;
				}
			}
            > * {
                border: 1px solid white;
                width: 100%;
            }
		}
	}
}
</style>
