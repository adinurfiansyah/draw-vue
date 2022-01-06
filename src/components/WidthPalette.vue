<template>
	<div class="width-palatte">
		<div class="color" v-for="width in listWidth" v-bind:key="width" v-on:click="handleWidth(width)">
			<div :style="{ borderWidth: width + 'px', height: width + 'px' }" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'WidthPalette',
	methods: {
		handleWidth(w) {
			this.$bus.setStore('activeWidth', w);
			this.$bus.setStore('tool', 'pencil');
		},
		handleOverlay() {
			this.$bus.setStore('tool', false);
		},
	},
	data() {
		return {
			listWidth: [1, 5, 10, 15, 20],
		};
	},
};
</script>

<style lang="scss" scoped>
.width-palatte {
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	> * {
		width: 100%;
		margin: 0 auto 15px;
		cursor: pointer;
		&:hover,
		&.active {
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
</style>
