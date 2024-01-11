<template>
  <main class="main">
    <div class="container">
      <div class="main__inner">
        <p class="h1" v-html="$props.main.title"></p>
        <p class="subtitle" v-html="$props.main.description"></p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ["main"],
};
</script>

<style></style>
