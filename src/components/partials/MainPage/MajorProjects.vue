<template>
  <section class="major-slider">
    <div class="container">
      <div class="major-slider__inner">
        <div class="major-slider__header" v-if="content">
          <p class="suptitle" v-if="content && content.label">
            {{ content.label }}
          </p>
          <p class="title" v-if="content && content.title">
            {{ content.title }}
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
                <ul>
                  <li v-if="slide.client">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z"
                        stroke="#B3CDD4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z"
                        stroke="#B3CDD4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>
                      {{ slide.client }}
                    </span>
                  </li>
                </ul>
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
  props: ["projects"],
  setup(props) {
    const content = computed(() => props.projects.content);
    const slides = computed(() => props.projects.projects);

    return {
      slides,
      content,
      getImg,
    };
  },
};
</script>

<style></style>
