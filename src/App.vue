<template>
  <div>
    <NavBar :mobile="mobile" />
    <Suspense>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Suspense timeout="0">
            <template #default>
              <component :mobile="mobile" :is="Component" :key="$route.path" />
            </template>
            <template #fallback>
              <LoaderIcon />
            </template>
          </Suspense>
        </template>
      </RouterView>
    </Suspense>
    <FooterMain />
  </div>
</template>
<script>
import FooterMain from "./components/base/FooterMain.vue";
import LoaderIcon from "./components/base/LoaderIcon.vue";
import NavBar from "./components/base/NavBar.vue";

export default {
  name: "app",
  components: {
    LoaderIcon,
    FooterMain,
    NavBar,
  },
  data() {
    return {
      windowWidth: null,
      mobile: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    },
  },
};
</script>
