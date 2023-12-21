<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="logo" @click="redirect('/')">
          <img src="../../assets/images/logo.svg" alt="logo" />
        </div>
        <nav>
          <ul>
            <li
              v-for="(item, idx) in headers"
              :key="idx"
              :class="route.path == item.link ? 'active' : ''"
              @click="redirect(item.link)"
            >
              {{ item.name }}
            </li>
          </ul>
        </nav>
        <div class="language">Eng</div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    const headers = ref([
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About us",
        link: "/about",
      },
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Contacts",
        link: "/contacts",
      },
    ]);

    const redirect = (event) => {
      router.push({ path: event });
    };

    return {
      headers,
      router,
      route,
      redirect,
    };
  },
};
</script>

<style></style>
