<template>
  <section class="product-slider">
    <div class="container">
      <div class="product-slider__inner">
        <div class="product-slider__header">
          <p class="suptitle">ForteOil products</p>
          <p class="title">Quick at market needs reacting</p>
          <p class="subtitle">
            “Forte Oil Field Services” LLP provides a wide range of services and
            products’ assortment. We always hear our clients and are happy to
            offer individual “be-spoke” solutions.
          </p>
        </div>
        <Splide
          :options="{
            type: 'loop',
            interval: 3000,
            speed: 700,
            Infinity: false,
            pagination: false,
            arrows: true,
            autoWidth: true,
            focus: 0,
            omitEnd: true,
            breakpoints: {
              580: {
                perPage: 1,
                swipe: true,
              },
            },
          }"
        >
          <SplideSlide v-for="(slide, index) in slides" :key="index">
            <div class="slide-item">
              <img
                v-if="slide.img"
                :src="require(`@/assets/images/${slide.img}`)"
                alt=""
              />
              <div class="slide-item__content">
                <p v-if="slide.title">{{ slide.title }}</p>
                <router-link to="/products" class="more">
                  More details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16666 9.99996H15.8333M15.8333 9.99996L9.99999 4.16663M15.8333 9.99996L9.99999 15.8333"
                      stroke="#E6EEF1"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const slides = ref([
      {
        title: "Generators",
        img: "services-1.jpg",
      },
      {
        title: "Compressors",
        img: "services-1.jpg",
      },
      {
        title: "Lighting towers",
        img: "services-1.jpg",
      },
      {
        title: "Dryers",
        img: "services-1.jpg",
      },
      {
        title: "Trucks",
        img: "services-1.jpg",
      },
    ]);

    return {
      slides,
    };
  },
};
</script>

<style></style>
