<template>
  <loader v-if="isLoading" />
  <div v-else>
    <main-block />
    <solutions />
    <product-slider />
    <services-slider />
    <major-projects />
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
import MajorProjects from "@/components/partials/MainPage/MajorProjects.vue";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import Loader from "@/components/global/Loader.vue";

export default {
  components: {
    MainBlock,
    Solutions,
    Partners,
    Request,
    ProductSlider,
    ServicesSlider,
    MajorProjects,
    Loader,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    onMounted(async () => {
      await store.dispatch("main/getMain").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      isLoading,
    };
  },
};
</script>
