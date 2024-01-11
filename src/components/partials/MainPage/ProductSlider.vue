<template>
  <section class="product-slider">
    <div class="container">
      <div class="product-slider__inner">
        <div class="product-slider__header" v-if="content">
          <p class="suptitle" v-if="content && content.label">
            {{ content.label }}
          </p>
          <p class="title" v-if="content && content.title">
            {{ content.title }}
          </p>
          <p class="subtitle" v-if="content && content.description">
            {{ content.description }}
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
              <img v-if="slide.img_uri" :src="getImg(slide.img_uri)" alt="" />
              <div class="slide-item__content">
                <p v-if="slide.title">{{ slide.title }}</p>
                <router-link to="/products" class="more">
                  {{ $t("more") }}
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
import { computed, ref } from "vue";
import { getImg } from "@/helpers/imageUrl";

export default {
  props: ["products"],
  setup(props) {
    const content = computed(() => props.products.content);

    const slides = computed(() => props.products.products);

    return {
      slides,
      getImg,
      content,
    };
  },
};
</script>

<style></style>
