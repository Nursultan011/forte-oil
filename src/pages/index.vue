<template>
  <loader v-if="isLoading" />
  <div v-else>
    <main-block :main="main.home" />
    <solutions :about="main.about" />
    <product-slider :products="main.products" />
    <services-slider :services="main.services" />
    <major-projects :projects="main.projects" />
    <section class="actions" v-if="main && main.performance">
      <div class="container">
        <div class="actions__inner">
          <div class="actions__content">
            <p
              class="title"
              v-if="
                main &&
                main.performance &&
                main.performance.content &&
                main.performance.content.title
              "
            >
              {{ main.performance.content.title }}
            </p>
            <p
              class="subtitle"
              v-if="
                main &&
                main.performance &&
                main.performance.content &&
                main.performance.content.description
              "
            >
              {{ main.performance.content.description }}
            </p>
          </div>
          <div
            class="actions__sliders"
            v-if="main && main.performance && main.performance.performance"
          >
            <swiper
              :effect="'cards'"
              :grabCursor="true"
              :modules="modules"
              :cardsEffect="{
                rotate: false,
                slideShadows: false,
                perSlideOffset: 11,
                perSlideRotate: 10,
              }"
              :pagination="{ clickable: true }"
              :navigation="true"
              :autoplay="{
                delay: 2000,
              }"
              class="mySwiper"
            >
              <swiper-slide
                v-for="(item, i) in main.performance.performance"
                :key="i"
              >
                <span> {{ item.title }} </span>
                <p>{{ item.description }}</p>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>
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
import { ref, onMounted, computed, watch } from "vue";
import Loader from "@/components/global/Loader.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { useI18n } from "vue-i18n";
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
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(true);
    const currentSlide = ref(0);

    const { locale } = useI18n({ useScope: "global" });

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

    watch(locale, async (val) => {
      isLoading.value = true;
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
      modules: [EffectCards, Pagination, Navigation],
    };
  },
};
</script>
