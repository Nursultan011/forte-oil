<template>
  <loader v-if="isLoading" />
  <div v-else>
    <section class="about-main">
      <div class="container">
        <div class="about-main__inner">
          <p class="suptitle">About company</p>
          <p class="title">
            Effective Solutions in the Energy and Manufacturing Industries
          </p>
          <p class="subtitle">
            We adhere to international quality and safety standards,
            specializing in refrigeration, power, air handling, pumping systems
            and components.
          </p>
        </div>
      </div>
    </section>
    <section class="about-second">
      <div
        class="about-second__block"
        :style="`background-image: url(${require('../assets/images/about-2-1.jpg')})`"
      >
        <div class="container">
          <div class="about-second__content">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 10V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H10.5M13 11H8M11 15H8M16 7H8M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z"
                  stroke="#00586F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>What we offer</h3>
            <p>
              Being an official Kazakhstani dealer of the Globe Power
              (Australia) the industrial leader in power equipment and the UN
              Forklift (PRC) leader in the loading equipment, we offer our
              clients the equipment with the delivery to the site for the
              reasonable price with the producers’ warranties. We also provide
              after-purchase service and delay-free supplies of the spare parts.
            </p>
            <img class="mobile" src="../assets/images/about-2-1.jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        class="about-second__block"
        :style="`background-image: url(${require('../assets/images/about-2-2.jpg')})`"
      >
        <div class="container">
          <div class="about-second__content">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 11.5L11 13.5L15.5 8.99999M20 12C20 16.9084 14.646 20.4784 12.698 21.6149C12.4766 21.744 12.3659 21.8086 12.2097 21.8421C12.0884 21.8681 11.9116 21.8681 11.7903 21.8421C11.6341 21.8086 11.5234 21.744 11.302 21.6149C9.35396 20.4784 4 16.9084 4 12V7.21759C4 6.41808 4 6.01833 4.13076 5.6747C4.24627 5.37113 4.43398 5.10027 4.67766 4.88552C4.9535 4.64243 5.3278 4.50207 6.0764 4.22134L11.4382 2.21067C11.6461 2.13271 11.75 2.09373 11.857 2.07827C11.9518 2.06457 12.0482 2.06457 12.143 2.07827C12.25 2.09373 12.3539 2.13271 12.5618 2.21067L17.9236 4.22134C18.6722 4.50207 19.0465 4.64243 19.3223 4.88552C19.566 5.10027 19.7537 5.37113 19.8692 5.6747C20 6.01833 20 6.41808 20 7.21759V12Z"
                  stroke="#00586F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>Quality standards</h3>
            <p>
              Since the start of our business in 2016 we have paid careful
              attention to the quality standards, green technologies and
              security. Our company’s Management quality system was certified
              according to the standards of ISO 9001, ISO 14001 and 45001 by
              Bureau Veritas the leading European certification body.
            </p>
            <img class="mobile" src="../assets/images/about-2-2.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="about-third">
      <div class="container">
        <div class="about-third__inner">
          <div class="about-third__left">
            <p
              class="title"
              v-if="about && about.directions && about.directions.title"
            >
              {{ about.directions.title }}
            </p>
          </div>
          <div
            class="about-third__right"
            v-if="about && about.directions && about.directions.content"
          >
            <div v-for="(item, i) in about.directions.content" :key="i">
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
    <team />
    <partners />
    <request />
  </div>
</template>

<script>
import Partners from "@/components/partials/Partners.vue";
import Request from "@/components/partials/Request.vue";
import { ref, onMounted, computed } from "vue";
import Team from "@/components/partials/Team.vue";
import Loader from "@/components/global/Loader.vue";
import { useStore } from "vuex";

export default {
  components: {
    Partners,
    Request,
    Team,
    Loader,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

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

    const aboutUs = computed(() => store.state.about.data);

    onMounted(async () => {
      await store.dispatch("main/getAbout").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      about,
      isLoading,
      aboutUs,
    };
  },
};
</script>

<style></style>
