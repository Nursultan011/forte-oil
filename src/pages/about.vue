<template>
  <loader v-if="isLoading" />
  <div v-else>
    <section class="about-main" v-if="aboutUs && aboutUs.home">
      <div class="container">
        <div class="about-main__inner">
          <p
            class="suptitle"
            v-if="aboutUs && aboutUs.home && aboutUs.home.label"
          >
            {{ aboutUs.home.label }}
          </p>
          <p class="title" v-if="aboutUs && aboutUs.home && aboutUs.home.title">
            {{ aboutUs.home.title }}
          </p>
          <p
            class="subtitle"
            v-if="aboutUs && aboutUs.home && aboutUs.home.description"
          >
            {{ aboutUs.home.description }}
          </p>
        </div>
      </div>
    </section>
    <section class="about-second">
      <div
        class="about-second__block"
        v-for="(item, i) in aboutUs.company_info"
        :key="i"
        :style="`background-image: url(${getImg(item.img_uri)})`"
      >
        <div class="container">
          <div class="about-second__content">
            <div class="icon" v-if="item.ico_uri">
              <img :src="getIcon(item.ico_uri)" alt="" />
            </div>
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.description }}
            </p>
            <img
              class="mobile"
              v-if="item.img_uri"
              :src="getImg(item.img_uri)"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="about-third" v-if="aboutUs && aboutUs.directions">
      <div class="container">
        <div class="about-third__inner">
          <div class="about-third__left">
            <p
              class="title"
              v-if="
                aboutUs &&
                aboutUs.directions &&
                aboutUs.directions.content &&
                aboutUs.directions.content.title
              "
            >
              {{ aboutUs.directions.content.title }}
            </p>
          </div>
          <div
            class="about-third__right"
            v-if="
              aboutUs && aboutUs.directions && aboutUs.directions.directions
            "
          >
            <div v-for="(item, i) in aboutUs.directions.directions" :key="i">
              <p>
                {{ item.title }}
              </p>
              <span>
                {{ item.description }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <team :team="aboutUs.team" />
    <major-projects :projects="aboutUs.projects" />
    <partners :partners="aboutUs.partners" />
    <request :request="aboutUs.form_request" />
  </div>
</template>

<script>
import Partners from "@/components/partials/Partners.vue";
import Request from "@/components/partials/Request.vue";
import { ref, onMounted, computed, watch } from "vue";
import Team from "@/components/partials/Team.vue";
import Loader from "@/components/global/Loader.vue";
import MajorProjects from "@/components/partials/MainPage/MajorProjects.vue";
import { useStore } from "vuex";
import { getImg, getIcon } from "@/helpers/imageUrl";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Partners,
    Request,
    Team,
    Loader,
    MajorProjects,
  },

  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const { locale } = useI18n({ useScope: "global" });

    const about = ref({
      main: {
        suptitle: "ForteOil products",
        title: "Quick at market needs reacting",
        description:
          "“Forte Oil Field Services” LLP provides a wide range of services and products’ assortment. We always hear our clients and are happy to offer individual “be-spoke” solutions.",
      },
      info: [
        {
          icon: "",
          img: "",
          title: "What we offer",
          description:
            "Being an official Kazakhstani dealer of the Globe Power (Australia) the industrial leader in power equipment and the UN Forklift (PRC) leader in the loading equipment, we offer our clients the equipment with the delivery to the site for the reasonable price with the producers’ warranties. We also provide after-purchase service and delay-free supplies of the spare parts.",
        },
        {
          icon: "",
          img: "",
          title: "Quality standards",
          description:
            "Since the start of our business in 2016 we have paid careful attention to the quality standards, green technologies and security. Our company’s Management quality system was certified according to the standards of ISO 9001, ISO 14001 and 45001 by Bureau Veritas the leading European certification body.",
        },
      ],
      directions: {
        title: "Main directions of the company",
        content: [
          {
            title: "Field services",
            description: "Environmental friendly, cost effective solutions",
          },
          {
            title: "Sales of equipment and machinery",
            description: "Well-structured, skilled sales team.",
          },
          {
            title: "Rental of equipment and machinery",
            description: "Latest equipment and technologies.",
          },
          {
            title: "Maintenance",
            description: "Well-structured, skilled service setup.",
          },
          {
            title: "Manpower",
            description: "Support onsite operations.",
          },
        ],
      },
      team: {
        title: "Our team",
        description:
          "We’re always on the lookout for passionate, dynamic, and talented individuals.",
      },
      projects: {
        suptitle: "Operational experience",
        title: "Major Projects",
        content: [],
      },
    });

    const aboutUs = computed(() => store.state.main.about.data);

    onMounted(async () => {
      await store.dispatch("main/getAbout").then((res) => {
        isLoading.value = false;
      });
    });

    watch(locale, async (val) => {
      isLoading.value = true;

      await store.dispatch("main/getAbout").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      about,
      isLoading,
      aboutUs,
      getImg,
      getIcon,
    };
  },
};
</script>

<style></style>
