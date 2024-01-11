<template>
  <loader v-if="isLoading" />
  <section v-else class="services">
    <div class="container">
      <div class="services__inner">
        <span
          class="suptitle"
          v-if="service && service.content && service.content.label"
        >
          {{ service.content.label }}
        </span>
        <div
          class="title"
          v-if="service && service.content && service.content.title"
        >
          {{ service.content.title }}
        </div>
        <div
          class="subtitle"
          v-if="service && service.content && service.content.description"
        >
          {{ service.content.description }}
        </div>
        <div
          class="services__wrap"
          v-for="(card, idx) in categorizedServices"
          :key="idx"
        >
          <div
            class="services__title"
            v-if="card.title && card.cards && card.cards.length > 0"
          >
            <span>
              {{ card.title }}
            </span>
          </div>
          <div class="cards" v-if="card.cards">
            <div class="card" v-for="(item, i) in card.cards" :key="i">
              <!-- <div class="badge">Cleaning services</div> -->
              <div class="img">
                <img v-if="item.img_uri" :src="getImg(item.img_uri)" alt="" />
              </div>
              <h3 v-if="item.title">
                {{ item.title }}
              </h3>
              <p v-if="item.description">
                {{ item.description }}
              </p>
              <div v-if="item.applications_include" class="items">
                <div
                  @click="toggleItem(item.title + '-' + i)"
                  class="items-header"
                >
                  {{ $t("applications_txt") }}
                  <svg
                    v-if="isItemOpen(item.title + '-' + i)"
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
                <div
                  class="items-content"
                  v-html="item.applications_include"
                  v-if="isItemOpen(item.title + '-' + i)"
                ></div>
              </div>
              <div v-if="item.advantages" class="items mt-16px">
                <div
                  @click="toggleItem(item.title + '-' + 'advantage' + '-' + i)"
                  class="items-header"
                >
                  {{ $t("advantages_txt") }}
                  <svg
                    v-if="isItemOpen(item.title + '-' + 'advantage' + '-' + i)"
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
                <div
                  class="items-content"
                  v-html="item.advantages"
                  v-if="isItemOpen(item.title + '-' + 'advantage' + '-' + i)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import Loader from "@/components/global/Loader.vue";
import { useStore } from "vuex";
import { getImg } from "@/helpers/imageUrl";

export default {
  components: {
    Loader,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const service = computed(() => store.state.main.services.data);

    const categorizedServices = computed(() => {
      const services = store.state.main.services?.data?.services || [];
      const categories = store.state.main.services?.data?.categories || [];

      let result = [];

      categories.forEach((category) => {
        let categoryServices = services.filter(
          (service) => service.category_id === category.id
        );
        result.push({
          title: category.title,
          cards: categoryServices,
        });
      });

      return result;
    });

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
      service,
      services,
      openItems,
      toggleItem,
      isItemOpen,
      store,
      isLoading,
      getImg,
      categorizedServices,
    };
  },
};
</script>

<style></style>
