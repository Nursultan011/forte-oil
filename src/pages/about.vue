<template>
  <div>
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
    <section class="about-second"></section>
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
import { ref } from "vue";
import Team from "@/components/partials/Team.vue";

export default {
  components: {
    Partners,
    Request,
    Team,
  },
  setup() {
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

    return {
      about,
    };
  },
};
</script>

<style></style>
