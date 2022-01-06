<template>
	<Canvas />
    <bar />
</template>

<script>
import Bar from '../components/Bar.vue';
import Canvas from '../components/Canvas.vue';

export default {
	name: 'Drawing',
	components: {
		Canvas,
        Bar,
	},
};
</script>
