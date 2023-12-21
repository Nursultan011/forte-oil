<template>
  <section class="partners">
    <div class="container">
      <div class="partners__inner">
        <p class="title">We are trusted</p>
        <div class="cards">
          <img
            v-for="idx in 6"
            :key="idx"
            :src="require(`../../assets/images/partner-${idx}.png`)"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
