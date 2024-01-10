<template>
  <section class="team-slider" v-if="team && team.team">
    <div class="container">
      <div class="team-slider__inner">
        <div class="team-slider__header">
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
import { computed, ref } from "vue";
import { getImg } from "@/helpers/imageUrl";
export default {
  props: ["team"],
  setup(props) {
    const content = computed(() => props.team.content);
    const slides = computed(() => props.team.team);

    return {
      slides,
      content,
      getImg,
    };
  },
};
</script>

<style></style>
