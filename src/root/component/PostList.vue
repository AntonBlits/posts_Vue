<template>
  <div v-if="posts.length > 0">
    <transition-group name="posts">
      <post-item
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @remove="$emit('remove', post)"
      ></post-item>
    </transition-group>
  </div>
  <h2 v-else style="color: red">Список постов пуст</h2>
</template>

<script>
import PostItem from "@/root/component/PostItem.vue";

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>
.posts-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-enter-active, .posts-leave-active {
  transition: all 0.5s;
}
.posts-enter, .posts-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.posts-move {
  transition: transform 0.5s;
}
</style>