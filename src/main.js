import {createApp} from 'vue'
import App from './App.vue'
import components from '@/root/component/ui'
import directives from "@/root/directives";
import router from "@/root/router/router";
import store from "@/root/store";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .use(store)
    .mount('#app')