import MainPage from "@/root/pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/root/pages/PostPage.vue";
import AboutPage from "@/root/pages/AboutPage.vue";
import InfoPostPage from "@/root/pages/InfoPostPage.vue";
import PostPageWithStore from "@/root/pages/PostPageWithStore.vue";
import PostPageCompositionApi from "@/root/pages/PostPageCompositionApi.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: InfoPostPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;