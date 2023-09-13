<template>
  <div class="navbar">
    <h1 @click="$router.push('/')">Посты</h1>
    <div class="navnar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
      <my-button @click="$router.push('/store')">Store Vuex</my-button>
      <my-button @click="$router.push('/composition')">Composition Api</my-button>
    </div>
  </div>
</template>

<script>
import router from "@/root/router/router";

export default {
  methods: {
    router() {
      return router
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navnar__btns {
  margin-left: auto;
}

.navnar__btns button {
  margin-left: 20px;
}

</style>