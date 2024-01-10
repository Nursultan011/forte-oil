<template>
  <section class="partners">
    <div class="container">
      <div class="partners__inner">
        <p
          class="title"
          v-if="content && content.content && content.content.title"
        >
          {{ content.content.title }}
        </p>
        <div class="cards" v-if="content && content.partners">
          <img
            v-for="(item, i) in content.partners"
            :key="i"
            :src="getIcon(item.img_uri)"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "vue";
import { getIcon } from "@/helpers/imageUrl";

export default {
  props: ["partners"],
  setup(props) {
    const content = computed(() => props.partners);

    return {
      getIcon,
      content,
    };
  },
};
</script>

<style></style>
