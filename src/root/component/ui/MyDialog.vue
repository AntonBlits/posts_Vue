<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/root/mixins/toggleMixin";

export default {
  name: 'my-dialog',
 mixins: [toggleMixin]
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: rgb(0, 0, 0, 0.5);
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 70px;
  min-width: 500px;
  padding: 20px;
}

</style>