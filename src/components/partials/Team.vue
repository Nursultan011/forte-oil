<template>
  <section class="team-slider">
    <div class="container">
      <div class="team-slider__inner">
        <div class="team-slider__header">
          <p class="title">Our team</p>
          <p class="subtitle">
            We’re always on the lookout for passionate, dynamic, and talented
            individuals.
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
                <p v-if="slide.name">{{ slide.name }}</p>
                <h3 v-if="slide.position">{{ slide.position }}</h3>
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
        name: "Generators",
        position: "Должность",
        img: "professor.jpeg",
      },
      {
        name: "Compressors",
        position: "Должность",
        img: "professor.jpeg",
      },
      {
        name: "Lighting towers",
        position: "Должность",
        img: "professor.jpeg",
      },
      {
        name: "Dryers",
        position: "Должность",
        img: "professor.jpeg",
      },
      {
        name: "Trucks",
        position: "Должность",
        img: "professor.jpeg",
      },
    ]);

    return {
      slides,
    };
  },
};
</script>

<style></style>
