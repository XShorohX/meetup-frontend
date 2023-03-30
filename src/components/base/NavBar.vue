<template>
  <div class="navbar gradient">
    <div class="flex justify-evenly items-center gap-2 h-full">
      <RouterLink class="flex gap-2 items-center" to="/">
        <IconLogo class="stroke-white" />
        <div class="h1">Айон</div>
      </RouterLink>
      <CollapseTransition>
        <div class="overflow-auto max-h-[104px]" v-show="isOpen || !mobile">
          <div class="flex gap-[48px]" :class="{ 'flex-col': mobile }">
            <div class="h3">
              <RouterLink class="nav-link" to="/">Главная</RouterLink>
            </div>
            <div class="h3">
              <RouterLink class="nav-link" to="/meets">Митапы</RouterLink>
            </div>
            <div class="h3">
              <RouterLink class="nav-link" to="/reports">Доклады</RouterLink>
            </div>
            <div class="h3">
              <RouterLink class="nav-link" to="/speakers">
                Докладчики
              </RouterLink>
            </div>
          </div>
        </div>
      </CollapseTransition>
      <ButtonBase
        class="active:stroke-black stroke-white button"
        @click="isOpen = !isOpen"
        v-show="mobile"
      >
        <IconMenu />
      </ButtonBase>
    </div>
  </div>
</template>

<script>
import CollapseTransition from "@ivanv/vue-collapse-transition/src/CollapseTransition.vue";
import IconLogo from "../icons/IconLogo.vue";
import IconMenu from "../icons/IconMenu.vue";
import ButtonBase from "./ButtonBase.vue";
export default {
  name: "NavBar",
  components: {
    CollapseTransition,
    ButtonBase,
    IconLogo,
    IconMenu,
  },
  props: {
    mobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.navbar {
  @apply sticky top-0  h-[104px];
}
</style>
