<template>
  <main
    class="main"
    :style="`background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${getImg(
      img
    )}), lightgray 50%`"
  >
    <div class="container">
      <div class="main__inner">
        <p class="h1" v-html="$props.main.title"></p>
        <p class="subtitle" v-html="$props.main.description"></p>
      </div>
    </div>
  </main>
</template>

<script>
import { getImg } from "@/helpers/imageUrl";
import { computed } from "vue";
export default {
  props: ["main"],
  setup(props) {
    const img = computed(() => props.main.img_uri);

    return { getImg, img };
  },
};
</script>

<style></style>
