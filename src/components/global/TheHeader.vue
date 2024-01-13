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
        <!-- {{ t("home") }} -->
        <div class="header__flex">
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
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import {
  SUPPORT_LOCALES as supportLocales,
  setI18nLanguage,
} from "@/helpers/i18n";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isMenuOpen = ref(false);
    const isDropdownOpenLang = ref(false);
    const availableLanguages = ["en", "ru", "kz"];

    const { t, locale } = useI18n({ useScope: "global" });

    const headers = computed(() => [
      {
        name: t("home"),
        link: "/",
      },
      {
        name: t("about"),
        link: "/about",
      },
      {
        name: t("products"),
        link: "/products",
      },
      {
        name: t("services"),
        link: "/services",
      },
      {
        name: t("contacts"),
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
      setI18nLanguage(lang);
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
    };
  },
};
</script>

<style></style>
