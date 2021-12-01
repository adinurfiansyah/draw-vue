<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<Canvas />
</template>

<script>
import Canvas from './components/Canvas.vue';
import { canvasStore } from './store';
import './assets/scss/index.scss';
// import Bar from './components/Bar.vue'

export default {
	name: 'App',
	components: {
		Canvas,
		// Bar
	},
	provide: {
		canvasStore,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* margin-top: 60px; */
}
</style>
