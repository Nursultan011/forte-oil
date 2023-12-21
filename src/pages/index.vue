<template>
  <div>
    <main-block />
    <solutions />
    <partners />
    <request />
  </div>
</template>

<script>
import MainBlock from "@/components/partials/MainPage/MainBlock.vue";
import Solutions from "@/components/partials/MainPage/Solutions.vue";
import Partners from "@/components/partials/Partners.vue";
import Request from "@/components/partials/Request.vue";

export default {
  components: {
    MainBlock,
    Solutions,
    Partners,
    Request,
  },
};
</script>

<style></style>
