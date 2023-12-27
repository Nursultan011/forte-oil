<template>
  <the-header />
  <router-view class="app-inner" />
  <the-footer />
</template>

<script>
import TheHeader from "./components/global/TheHeader.vue";
import TheFooter from "./components/global/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
.app-inner {
  min-height: 80vh;
}
</style>
