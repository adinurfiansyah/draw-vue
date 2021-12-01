<template>
	<div class="bar">
		<div class="content">
			<button v-on:click="handleClick('pencil', $event)" class="btn btn-pencil" :class="canvasStore.state.tool === 'pencil' ? 'active' : ''">
				<i class="fas fa-pencil-alt"></i>
			</button>
			<button v-on:click="handleClick('eraser', $event)" class="btn btn-eraser" :class="canvasStore.state.tool === 'eraser' ? 'active' : ''">
				<i class="fas fa-eraser"></i>
			</button>
			<button v-on:click="handleClick('fill', $event)" class="btn btn-color" :class="canvasStore.state.tool === 'fill' ? 'active' : ''">
				<i class="fas fa-fill"></i>
			</button>
			<button v-on:click="handleClick('clr', $event)" class="btn btn-clr" :class="canvasStore.state.tool === 'clr' ? 'active' : ''">
				<!-- <i class="fas fa-fill"></i> -->
				<div :style="{ borderWidth: canvasStore.state.width + 'px', height: canvasStore.state.width + 'px' }" />
			</button>
			<button v-on:click="handleClick('clear', $event)" class="btn btn-clear" :class="canvasStore.state.tool === 'clear' ? 'active' : ''">
				<i class="fas fa-eraser"></i>
			</button>
		</div>
	</div>
	<color-palette v-bind:x="lastPosition.x" v-bind:y="lastPosition.y" v-if="canvasStore.state.tool === 'fill'" />
	<width-palette v-bind:x="lastPosition.x" v-bind:y="lastPosition.y" v-if="canvasStore.state.tool === 'clr'" />
</template>

<script>
import ColorPalette from './ColorPalette.vue';
import WidthPalette from './WidthPalette.vue';
export default {
	inject: ['canvasStore'],
	name: 'Bar',
	props: ['x', 'y'],
	components: {
		ColorPalette,
		WidthPalette,
	},
	data() {
		return {
			lastPosition: {
				x: 0,
				y: 0,
			},
		};
	},
	methods: {
		handleClick(type, event) {
			// console.log(event)
			this.lastPosition.x = event.pageX;
			this.lastPosition.y = event.pageY;
			
			if (type === 'clear') {
				const canvas = this.canvasStore.state.canvas;
				const ctx = canvas.getContext('2d');
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			} else {
                this.canvasStore.setTool(type);
            }
			// console.log(canvas, ctx);
			// window.localStorage.clear();
			// window.localStorage.setItem(type, true);
		},
	},
};
</script>

<style lang="scss" scoped>
$clrPrimary: #4358d8;
.bar {
	position: fixed;
	right: 2.5%;
	top: 50%;
	transform: translateY(-50%);
	background: $clrPrimary;
	width: 10vmax;
	height: 80vmin;
	border-radius: 2.5vmax;
	padding: 2vmax 1.5vmax;
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		> .btn {
			background: transparent;
			border: none;
			outline: none;
			width: calc(100% / 2.9);
			height: 5vmin;
			margin: 0 auto 15px auto;
			&:hover,
			&.active {
				filter: brightness(1.2);
				background: white;
				i {
					color: black;
				}
				div {
					border: 1px solid black;
				}
			}
			i {
				color: white;
				font-size: 1.5vmax;
			}
			&-clr {
				> div {
					width: 100%;
					border: 1px solid white;
				}
			}
		}
	}
}
</style>
