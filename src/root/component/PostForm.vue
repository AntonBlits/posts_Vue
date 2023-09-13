<template>
  <form @submit.prevent class="form">
    <h4>Создание поста</h4>
    <my-input
        v-focus
        v-model="post.title"
        class="input" type="text"
        placeholder="Название"
    ></my-input>
    <my-input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Описание"
    ></my-input>
    <my-button class="btn" @click="createPost">Создать</my-button>
  </form>
</template>

<script>
import MyInput from "@/root/component/ui/MyInput.vue";

export default {
  components: {MyInput},
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = +new Date();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
}
</style>