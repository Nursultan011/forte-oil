<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__down">
          <p>© 2023 Forte Oil. All rights reserved.</p>
          <div class="icons"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const footer = ref({
      socials: [
        {
          icon: "instagram.svg",
          link: "",
        },
        {
          icon: "linkid.svg",
          link: "",
        },
        {
          icon: "facebook.svg",
          link: "",
        },
        {
          icon: "whatsapp.svg",
          link: "",
        },
      ],
    });

    return {
      footer,
    };
  },
};
</script>

<style></style>
