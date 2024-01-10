<template>
  <loader v-if="isLoading" />
  <div v-else>
    <main-block :main="main.home" />
    <solutions :about="main.about" />
    <product-slider :products="main.products" />
    <services-slider :services="main.services" />
    <major-projects :projects="main.projects" />
    <!-- <section class="actions">
      <div class="container">
        <div class="actions__inner">
          <div class="actions__content">
            <p class="title">Our work in action</p>
            <p class="subtitle">
              Everything you need to build modern UI and great products.
            </p>
          </div>
          <div class="actions__sliders"></div>
        </div>
      </div>
    </section> -->
    <partners :partners="main.partners" />
    <request :request="main.form_request" />
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
import { ref, onMounted, computed } from "vue";
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
    const currentSlide = ref(0);

    const slides = ref([
      { number: 41, text: "sustainability-related work" },
      { number: 41, text: "sustainability-related work" },
    ]);

    const main = computed(() => store.state.main.main.data);

    onMounted(async () => {
      await store.dispatch("main/getMain").then((res) => {
        isLoading.value = false;
      });
    });

    const nextSlide = () => {
      if (currentSlide.value < slides.value.length - 1) {
        currentSlide.value++;
      } else {
        currentSlide.value = 0; // Loop back to the first slide
      }
    };

    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--;
      } else {
        currentSlide.value = slides.value.length - 1;
      }
    };

    return {
      store,
      isLoading,
      slides,
      currentSlide,
      nextSlide,
      prevSlide,
      main,
    };
  },
};
</script>
