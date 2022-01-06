import { reactive } from 'vue';

const canvasStore = {
    state : reactive({
        canvas: false,
        tool: false,
        activeColor: '#000000',
        activeWidth: 1,
        imageResult : false,
    }),
    setStore(key, value) {
        if (!key || !value) return;
        this.state[key] = value;
    }
}

export default canvasStore;