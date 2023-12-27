<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="logo" @click="redirect('/')">
          <img src="../../assets/images/logo.svg" alt="logo" />
        </div>
        <nav :class="{ 'nav-burger': isMenuOpen }">
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
        <div class="burger-menu" @click="isMenuOpen = !isMenuOpen">
          <svg
            v-if="isMenuOpen === false"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#344054"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#667085"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
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
    const isMenuOpen = ref(false);

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
      isMenuOpen.value = false;
    };

    return {
      headers,
      router,
      route,
      redirect,
      isMenuOpen,
    };
  },
};
</script>

<style></style>
