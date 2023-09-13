<template>
   <post-navbar></post-navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import PostNavbar from "@/root/component/PostNavbar.vue";

export default {
  components: {PostNavbar}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
