<template>
	<div class="color-palatte">
		<div class="color" v-for="color in colors" v-bind:key="color" :style="{ background: color }" v-on:click="handleColor(color)"></div>
	</div>
</template>

<script>
export default {
	name: 'ColorPalette',
	methods: {
		handleColor(color) {
			this.$bus.setStore('activeColor', color);
			this.$bus.setStore('tool', 'pencil');
		},
		handleOverlay() {
			this.$bus.setStore('tool', false);
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
.color-palatte {
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	> * {
		width: calc(100% / 2.5);
		margin: 0 auto 15px;
		height: 5vmin;
		cursor: pointer;
		&:hover,
		&.active {
			filter: brightness(1.2);
			background: white;
			i {
				color: black;
			}
		}
	}
}
// .overlay {
// 	position: fixed;
// 	left: 0;
// 	right: 0;
// 	top: 0;
// 	bottom: 0;
// 	z-index: 2;
// 	width: 100%;
// 	height: 100%;
// 	background: rgba(#000000, 0.7);
// 	.fill {
// 		position: absolute;
// 		transform: translateX(-100%);
// 		width: 10vw;
// 		min-height: 10vw;
// 		background: var(--secondary);
// 		border-radius: 1.5vmax;
// 		padding: 2vmax 1.5vmax;

// 	}
// }
</style>
