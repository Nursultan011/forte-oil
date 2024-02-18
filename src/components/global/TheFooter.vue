<template>
  <footer class="footer">
    <loader v-if="isLoading" />
    <div v-else class="container">
      <div class="footer__inner">
        <div class="footer__up">
          <div class="footer__company">
            <div class="logo">
              <img src="../../assets/images/logo-light.svg" alt="" />
            </div>
            <p>{{ $t("footer_1") }}</p>
            <p>
              Разработано в
              <a href="">digital lab</a>
            </p>
          </div>
          <div class="footer__list">
            <ul>
              <li>
                <router-link to="/">{{ $t("home") }}</router-link>
              </li>
              <li>
                <router-link to="/about"> {{ $t("about") }} </router-link>
              </li>
            </ul>
            <ul v-if="main && main.product_categories">
              <li class="not-link">
                <router-link to="/products"> {{ $t("products") }} </router-link>
              </li>
              <li v-for="(item, i) in main.product_categories" :key="i">
                <router-link to="/products">{{ item.title }}</router-link>
              </li>
            </ul>
            <ul v-if="main && main.service_categories">
              <li class="not-link">
                <router-link to="/services">{{ $t("services") }}</router-link>
              </li>
              <li v-for="(item, i) in main.service_categories" :key="i">
                <router-link to="/services">{{ item.title }}</router-link>
              </li>
            </ul>
            <ul v-if="main && main.contacts">
              <li class="not-link">
                <router-link to="/contacts">{{ $t("contacts") }}</router-link>
              </li>
              <li v-for="(item, i) in main.contacts" :key="i">
                <a :href="item.url"> {{ item.content }} </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__down">
          <p>© 2024 {{ $t("footer_3") }}</p>
          <div class="icons" v-if="main && main.social_media">
            <a :href="item.url" v-for="(item, i) in main.social_media" :key="i">
              <img
                :key="i"
                v-if="item.ico_uri"
                :src="getIcon(item.ico_uri)"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Loader from "@/components/global/Loader.vue";
import { useStore } from "vuex";
import { ref, onMounted, computed, watch } from "vue";
import { getIcon } from "@/helpers/imageUrl";
import { useI18n } from "vue-i18n";
export default {
  components: {
    Loader,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(true);
    const { locale } = useI18n({ useScope: "global" });
    const main = computed(() => store.state.main.main.data.footer);

    onMounted(async () => {
      await store.dispatch("main/getMain").then((res) => {
        isLoading.value = false;
      });
    });

    watch(locale, (val) => {
      store.dispatch("main/getMain").then((res) => {
        isLoading.value = false;
      });
    });

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
      store,
      isLoading,
      main,
      getIcon,
    };
  },
};
</script>

<style></style>
