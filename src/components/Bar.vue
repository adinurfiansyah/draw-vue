<template>
	<div class="bar">
		<div class="content">
			<button
				class="btn"
				v-for="toolkit in toolkits"
				v-bind:key="toolkit.id"
				v-on:click="handleClick(toolkit.id, $event)"
				:class="`btn-${toolkit.id} ${this.$bus.state.tool === toolkit.id ? 'active' : ''}`"
			>
				<i v-if="toolkit.ico !== 'custom1'" :style="toolkit.id === 'fill' ? { color: this.$bus.state.activeColor } : {}" class="fas" :class="toolkit.ico"></i>
				<div v-else :style="{ borderWidth: this.$bus.state.activeWidth + 'px', height: this.$bus.state.activeWidth + 'px' }" />
			</button>
		</div>
	</div>
	<tooltip v-bind:x="lastPosition.x" v-bind:y="lastPosition.y" v-if="this.isOpen" />
</template>

<script>
import Tooltip from './Tooltip.vue';
export default {
	name: 'Bar',
	props: ['x', 'y'],
	components: {
		Tooltip,
	},
	data() {
		return {
			lastPosition: {
				x: 0,
				y: 0,
			},
			toolkits: [
				{
					id: 'pencil',
					ico: 'fa-pencil-alt',
				},
				{
					id: 'clear',
					ico: 'fa-file',
				},
				{
					id: 'eraser',
					ico: 'fa-eraser',
				},
				{
					id: 'fill',
					ico: 'fa-fill',
				},
				{
					id: 'width',
					ico: 'custom1',
				},
				{
					id: 'download',
					ico: 'fa-file-download',
				},
			],
		};
	},
	methods: {
		handleDownload(images) {
			const anchor = document.createElement('a');
			anchor.href = images;
			anchor.download = 'drawing.png';
			document.body.appendChild(anchor);
			anchor.click();
			document.body.removeChild(anchor);
		},
		handleClick(type, event) {
			const store = this.$bus;
			const canvas = store.state.canvas;
			const ctx = canvas.getContext('2d');
			this.lastPosition.x = event.pageX;
			this.lastPosition.y = event.pageY;
			switch (type) {
				case 'clear': {
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					break;
				}
				case 'download': {
					const images = canvas.toDataURL('image/jpeg');
					store.setStore('imageResult', images);
					this.handleDownload(images);
					break;
				}
				default: {
					store.setStore('tool', type);
				}
			}
		},
	},
	computed: {
		isOpen() {
			const defaultTool = ['fill', 'width'];
			const store = this.$bus;
			const tool = store.state.tool;
			return defaultTool.includes(tool);
		},
	},
};
</script>

<style lang="scss" scoped>
.bar {
	position: fixed;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	background: var(--primary);
	width: 15vmax;
	height: 100vmin;
	padding: 2vmax 3vmax;
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
			width: 7.5vmin;
			height: 7.5vmin;
			margin: 0 auto 15px auto;
			border: 1px solid var(--white);
			cursor: pointer;
			&:hover,
			&.active {
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
			&-width {
				> div {
					width: 100%;
					border: 1px solid white;
				}
			}
		}
	}
}
</style>
