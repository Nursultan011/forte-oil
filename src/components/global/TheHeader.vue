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
        <div class="header__language">
          <div
            class="language"
            @mouseover="openDropdownLang"
            @mouseleave="closeDropdownLang"
          >
            <div class="language-wrap">
              <span>{{ locale }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#555555"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <ul class="language-list" v-show="isDropdownOpenLang">
              <li
                v-for="lang in availableLanguages"
                :key="lang"
                @click="changeLanguage(lang)"
                :class="{ 'active-lang': lang == locale }"
              >
                {{ lang }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isMenuOpen = ref(false);
    const isDropdownOpenLang = ref(false);
    const availableLanguages = ["en", "ru", "kz"];

    const { t, locale, setLocale } = useI18n({
      inheritLocale: true,
    });

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

    const openDropdownLang = () => {
      isDropdownOpenLang.value = true;
    };

    const closeDropdownLang = () => {
      isDropdownOpenLang.value = false;
    };

    const changeLanguage = (lang) => {
      locale.value = lang;
    };

    return {
      headers,
      router,
      route,
      redirect,
      isMenuOpen,
      openDropdownLang,
      closeDropdownLang,
      availableLanguages,
      isDropdownOpenLang,
      changeLanguage,
      locale,
      t,
      setLocale,
    };
  },
};
</script>

<style></style>
