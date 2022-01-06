<template>
	<div class="canvas">
		<canvas ref="canvas" id="myCanvas"></canvas>
	</div>
</template>

<script>
export default {
	name: 'Canvas',
	data() {
		return {
			isIdle: true,
			ctx: false,
            position: {
                x : 0,
                y : 0
            },
            lastPosition: {
                x : 0,
                y : 0,
            }
		};
	},
	methods: {
		handlerMouseMove(p) {
			p.stopPropagation();
            this.position.x = p.pageX;
            this.position.y = p.pageY;
            if (!this.isIdle) {
                const state = this.$bus.state;
                this.ctx.beginPath();
                this.ctx.lineWidth = state.activeWidth;
                if (state.tool === 'pencil') {
                    this.ctx.strokeStyle = state.activeColor;
                    this.ctx.globalCompositeOperation="source-over";
                    this.ctx.moveTo(this.lastPosition.x, this.lastPosition.y);
                    this.ctx.lineTo(this.position.x, this.position.y);
                    this.ctx.stroke();
                    
                } else if (state.tool === 'eraser') {
                    this.ctx.globalCompositeOperation="destination-out";
                    this.ctx.arc(this.lastPosition.x, this.lastPosition.y ,8,0,Math.PI*2,false);
                    this.ctx.fill();
                }
                this.lastPosition.x = this.position.x;
                this.lastPosition.y = this.position.y;
            }
		},
		handleMouseClick(p) {
                const state = this.$bus.state;
                this.position.x = p.pageX;
                this.position.y = p.pageY;
                this.lastPosition.x = this.position.x;
                this.lastPosition.y = this.position.y;
                this.isIdle = false;
                if (state.tool === 'clr') {
                    this.ctx.fillStyle = state.activeColor;
                    this.ctx.fill();
                }
		},
		handleMouseLeft(p) {
            this.position.x = p.pageX;
            this.position.y = p.pageY;
			this.isIdle = true;

		},
        addMouseHandler() {
            this.canvas.addEventListener('mousemove', this.handlerMouseMove, false);
            this.canvas.addEventListener('mouseup', this.handleMouseLeft, false);
            this.canvas.addEventListener('mouseout', this.handleMouseLeft, false);
            this.canvas.addEventListener('mousedown', this.handleMouseClick, false);
        },
		initCanvas() {
            const store = this.$bus;
			this.canvas = this.$refs?.canvas;
			store.setStore('canvas', this.canvas);
			this.ctx = this.canvas.getContext('2d');
			let w = this.canvas.getBoundingClientRect().width;
			let h = this.canvas.getBoundingClientRect().height;
			if (this.canvas) {
				this.canvas.width = w;
				this.canvas.height = h;
                this.ctx.fillStyle = "#FFFFFF";
                this.ctx.fillRect(0,0, w, h);
				this.addMouseHandler();
			}
		},
	},
	mounted() {
		this.initCanvas();
		// console.log(this.canvasStore.state);
	},
};
</script>

<style lang="scss" scoped>
.canvas {
	width: 85vmax;
	height: 100vmin;
	background: white;
	canvas {
		width: 100%;
		height: 100%;
	}
}
</style>
