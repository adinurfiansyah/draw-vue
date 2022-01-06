import { createApp, h } from 'vue'
import bus from './bus';
import Drawing from './pages/Drawing.vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue'
import './assets/scss/index.scss'

const routes = {
    '/': Home,
    '/drawing': Drawing,
}

const Routing = {
    data: () => ({
        currentRoute: window.location.pathname
    }),
    computed: {
        ViewComponent() {
            console.log(this.currentRoute)
            return routes[this.currentRoute] || NotFound
        }
    },
    render() {
        return h(this.ViewComponent)
    },
    created() {
        window.addEventListener('popstate', () => {
            this.currentRoute = window.location.pathname
        })
    }
}

const app = createApp(Routing);
app.config.globalProperties.$bus = bus;
app.mount('#app');