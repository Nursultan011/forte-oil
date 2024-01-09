<template>
  <loader v-if="isLoading" />
  <section v-else class="services">
    <div class="container">
      <div class="services__inner">
        <span class="suptitle"> ForteOil services </span>
        <div class="title">Beautiful analytics to grow smarter</div>
        <div class="subtitle">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </div>
        <div
          class="services__wrap"
          v-if="services && services.cleaning_services"
        >
          <div
            class="services__title"
            v-if="
              services &&
              services.cleaning_services &&
              services.cleaning_services.title
            "
          >
            <span>
              {{ services.cleaning_services.title }}
            </span>
          </div>
          <div class="cards">
            <div
              class="card"
              v-for="(item, i) in services.cleaning_services.cards"
              :key="i"
            >
              <!-- <div class="badge">Cleaning services</div> -->
              <div class="img">
                <img
                  v-if="item.img"
                  :src="require(`@/assets/images/${item.img}`)"
                  alt=""
                />
              </div>
              <h3 v-if="item.title">
                {{ item.title }}
              </h3>
              <p v-if="item.description">
                {{ item.description }}
              </p>
              <div v-if="item.applications" class="items">
                <div
                  @click="toggleItem('applications-' + i)"
                  class="items-header"
                >
                  Applications include:
                  <svg
                    v-if="isItemOpen('applications-' + i)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
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
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <ul
                  v-if="isItemOpen('applications-' + i)"
                  class="items-content"
                >
                  <li v-for="(li, idx) in item.applications" :key="idx">
                    {{ li }}
                  </li>
                </ul>
              </div>
              <div v-if="item.advantages" class="items mt-16px">
                <div
                  @click="toggleItem('advantages-' + i)"
                  class="items-header"
                >
                  What are the advantages of pneumatic testing?
                  <svg
                    v-if="isItemOpen('advantages-' + i)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
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
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <ul v-if="isItemOpen('advantages-' + i)" class="items-content">
                  <li v-for="(li, idx) in item.advantages" :key="idx">
                    {{ li }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="services__wrap"
          v-if="services && services.testing_services"
        >
          <div
            class="services__title"
            v-if="
              services &&
              services.testing_services &&
              services.testing_services.title
            "
          >
            <span>
              {{ services.testing_services.title }}
            </span>
          </div>
          <div class="cards">
            <div
              class="card"
              v-for="(item, i) in services.testing_services.cards"
              :key="i"
            >
              <!-- <div class="badge">Cleaning services</div> -->
              <div class="img">
                <img
                  v-if="item.img"
                  :src="require(`@/assets/images/${item.img}`)"
                  alt=""
                />
              </div>
              <h3 v-if="item.title">
                {{ item.title }}
              </h3>
              <p v-if="item.description">
                {{ item.description }}
              </p>
              <div v-if="item.applications" class="items">
                <div
                  @click="toggleItem('applications2-' + i)"
                  class="items-header"
                >
                  Applications include:
                  <svg
                    v-if="isItemOpen('applications2-' + i)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
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
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <ul
                  v-if="isItemOpen('applications2-' + i)"
                  class="items-content"
                >
                  <li v-for="(li, idx) in item.applications" :key="idx">
                    {{ li }}
                  </li>
                </ul>
              </div>
              <div v-if="item.advantages" class="items mt-16px">
                <div
                  @click="toggleItem('advantages2-' + i)"
                  class="items-header"
                >
                  What are the advantages of pneumatic testing?
                  <svg
                    v-if="isItemOpen('advantages2-' + i)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
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
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <ul v-if="isItemOpen('advantages2-' + i)" class="items-content">
                  <li v-for="(li, idx) in item.advantages" :key="idx">
                    {{ li }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import Loader from "@/components/global/Loader.vue";
import { useStore } from "vuex";

export default {
  components: {
    Loader,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const services = ref({
      cleaning_services: {
        title: "Cleaning services",
        cards: [
          {
            img: "services-1.jpg",
            title: "Chemical cleaning",
            description:
              "Hydrostatic Testing, utilizing water or an approved liquid, is a quality control method to verify the strength of a system by testing beyond its design pressure.",
            applications: [
              "Non-metallic piping hydrotesting",
              "Valve hydrotesting",
              "Heat exchanger hydrotesting",
              "Pressure vessel and tank hydrotesting",
            ],
            advantages: [
              "Non-metallic piping hydrotesting",
              "Valve hydrotesting",
              "Heat exchanger hydrotesting",
              "Pressure vessel and tank hydrotesting",
            ],
          },
          {
            img: "services-1.jpg",
            title: "Chemical cleaning",
            description:
              "Hydrostatic Testing, utilizing water or an approved liquid, is a quality control method to verify the strength of a system by testing beyond its design pressure.",
            applications: [
              "Non-metallic piping hydrotesting",
              "Valve hydrotesting",
              "Heat exchanger hydrotesting",
              "Pressure vessel and tank hydrotesting",
            ],
            advantages: [
              "Non-metallic piping hydrotesting",
              "Valve hydrotesting",
              "Heat exchanger hydrotesting",
              "Pressure vessel and tank hydrotesting",
            ],
          },
        ],
      },
      testing_services: {
        title: "Testing services",
        cards: [
          {
            img: "services-2.jpg",
            title: "Chemical cleaning",
            description:
              "Hydrostatic Testing, utilizing water or an approved liquid, is a quality control method to verify the strength of a system by testing beyond its design pressure.",
            applications: [
              "Non-metallic piping hydrotesting",
              "Valve hydrotesting",
              "Heat exchanger hydrotesting",
              "Pressure vessel and tank hydrotesting",
            ],
            advantages: [
              "Non-metallic piping hydrotesting",
              "Valve hydrotesting",
              "Heat exchanger hydrotesting",
              "Pressure vessel and tank hydrotesting",
            ],
          },
          {
            img: "services-1.jpg",
            title: "Chemical cleaning",
            description:
              "Hydrostatic Testing, utilizing water or an approved liquid, is a quality control method to verify the strength of a system by testing beyond its design pressure.",
            applications: [
              "Non-metallic piping hydrotesting",
              "Valve hydrotesting",
              "Heat exchanger hydrotesting",
              "Pressure vessel and tank hydrotesting",
            ],
            advantages: [
              "Non-metallic piping hydrotesting",
              "Valve hydrotesting",
              "Heat exchanger hydrotesting",
              "Pressure vessel and tank hydrotesting",
            ],
          },
          {
            img: "services-2.jpg",
            title: "Chemical cleaning",
            description:
              "Hydrostatic Testing, utilizing water or an approved liquid, is a quality control method to verify the strength of a system by testing beyond its design pressure.",
            applications: [
              "Non-metallic piping hydrotesting",
              "Valve hydrotesting",
              "Heat exchanger hydrotesting",
              "Pressure vessel and tank hydrotesting",
            ],
            advantages: [
              "Non-metallic piping hydrotesting",
              "Valve hydrotesting",
              "Heat exchanger hydrotesting",
              "Pressure vessel and tank hydrotesting",
            ],
          },
        ],
      },
    });

    const openItems = ref([]);

    const toggleItem = (uniqueId) => {
      const itemIndex = openItems.value.indexOf(uniqueId);
      if (itemIndex !== -1) {
        openItems.value.splice(itemIndex, 1);
      } else {
        openItems.value.push(uniqueId);
      }
    };

    const isItemOpen = (uniqueId) => openItems.value.includes(uniqueId);

    onMounted(async () => {
      await store.dispatch("main/getServices").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      services,
      openItems,
      toggleItem,
      isItemOpen,
      store,
      isLoading,
    };
  },
};
</script>

<style></style>
