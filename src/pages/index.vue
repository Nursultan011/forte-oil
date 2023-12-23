<template>
  <div>
    <main-block />
    <solutions />
    <product-slider />
    <services-slider />
    <partners />
    <request />
  </div>
</template>

<script>
import MainBlock from "@/components/partials/MainPage/MainBlock.vue";
import Solutions from "@/components/partials/MainPage/Solutions.vue";
import Partners from "@/components/partials/Partners.vue";
import Request from "@/components/partials/Request.vue";
import ProductSlider from "@/components/partials/MainPage/ProductSlider.vue";
import ServicesSlider from "@/components/partials/MainPage/ServicesSlider.vue";

export default {
  components: {
    MainBlock,
    Solutions,
    Partners,
    Request,
    ProductSlider,
    ServicesSlider,
  },
};
</script>
