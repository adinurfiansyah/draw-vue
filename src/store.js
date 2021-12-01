import { reactive, readonly } from 'vue';

const state = reactive({
	canvas: false,
	tool: false,
	activeColor: '#000000',
	width: 1,
});

function setCanvas(canvas) {
	state.canvas = canvas;
}

function setTool(type) {
	state.tool = type;
}

function setColor(color) {
	state.activeColor = color;
}

function setWidth(w) {
	state.width = w;
}

export const canvasStore = readonly({
	state,
	setCanvas,
	setTool,
	setColor,
	setWidth,
});
