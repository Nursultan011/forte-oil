<template>
  <section class="solutions">
    <div class="container">
      <div class="solutions__inner">
        <div>
          <h2>
            {{ $props.about.title }}
          </h2>
          <p class="subtitle">
            {{ $props.about.description }}
          </p>
          <router-link to="/about" class="button">More details</router-link>
        </div>
        <div>
          <img src="@/assets/images/solutions-bg.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["about"],
};
</script>

<style></style>
