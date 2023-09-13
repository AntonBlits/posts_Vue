import {createStore} from "vuex";
import {postModule} from "@/root/store/postModule";

export default createStore({
    modules: {
        post: postModule,
    }
})