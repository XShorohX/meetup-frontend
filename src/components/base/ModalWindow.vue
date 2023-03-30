<template>
  <ButtonBase @click="open = true"><slot name="button"></slot></ButtonBase>
  <div v-if="open" class="flex justify-center">
    <div class="fixed top-0 z-999">
      <div class="flex flex-col gap-2">
        <div class="h3"><slot name="header"></slot></div>
        <div><slot name="body"></slot></div>
        <ButtonBase @click="open = false">Закрыть</ButtonBase>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBase from "./ButtonBase.vue";
export default {
  components: {
    ButtonBase,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
