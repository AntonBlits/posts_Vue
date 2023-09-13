<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск..."></my-input>
    <div class="app__btns">
      <my-button>Создать пост</my-button>
      <my-select
          v-model="selectedSort"
          :options="selectedOptions"
      ></my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form></post-form>
    </my-dialog>
    <div>Список постов</div>

    <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts"></post-list>
    <div v-else>Идет загрузка...</div>
    <div class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/root/component/PostForm.vue";
import PostList from "@/root/component/PostList.vue";
import MyButton from "@/root/component/ui/MyButton.vue";
import {usePosts} from "@/root/hooks/usePosts";
import {useSortedPosts} from "@/root/hooks/useSortedPosts";
import {useSortedAndSearchedPosts} from "@/root/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    MyButton,
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      selectedOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ],
    }
  },
  setup() {
    const {posts, totalPages, isPostLoading} = usePosts(10);
    const {sortedPost, selectedSort} = useSortedPosts(posts);
    const {sortedAndSearchedPosts, searchQuery} = useSortedAndSearchedPosts(sortedPost)

    return {
      posts,
      totalPages,
      isPostLoading,
      selectedSort,
      sortedAndSearchedPosts,
      searchQuery
    }
  }
}
</script>

<style scoped>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
  margin-left: 5px;
  cursor: default;
}

.page:hover {
  background: teal;
  opacity: 0.7;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
}
</style>