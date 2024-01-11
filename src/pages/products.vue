<template>
  <loader v-if="isLoading" />
  <section v-else class="products">
    <div class="container">
      <div class="products__inner">
        <div class="products__header" v-if="products && products.content">
          <span
            class="suptitle"
            v-if="products && products.content && products.content.label"
          >
            {{ products.content.label }}
          </span>
          <div
            class="title"
            v-if="products && products.content && products.content.title"
          >
            {{ products.content.title }}
          </div>
          <div
            class="subtitle"
            v-if="products && products.content && products.content.description"
          >
            {{ products.content.description }}
          </div>
        </div>
        <div class="products__content">
          <div class="products__categories">
            <p>{{ $t("category") }}</p>
            <div class="products__category">
              <span
                v-for="category in categories"
                :key="category"
                :class="{ active: activeCategory === category }"
                @click="setActiveCategory(category)"
              >
                {{ category }}
              </span>
            </div>
            <select class="products__select" v-model="activeCategory">
              <option
                v-for="category in categories"
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
            </select>
          </div>
          <div class="products__cards">
            <div
              class="products__card"
              v-for="(product, index) in filteredProducts"
              :key="index"
            >
              <img
                v-if="product.img_uri"
                :src="getImg(product.img_uri)"
                alt=""
              />
              <div class="products__card-content">
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
                <div
                  v-if="product.characteristics"
                  v-html="product.characteristics"
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
import { ref, computed, onMounted } from "vue";
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

    const products = computed(() => store.state.main.products.data);

    const activeCategory = ref("View all");

    const categories = computed(() => {
      const uniqueCategories = new Set();
      products.value.products.forEach((product) =>
        uniqueCategories.add(product.category)
      );
      return ["View all", ...uniqueCategories];
    });

    const filteredProducts = computed(() => {
      if (activeCategory.value === "View all") {
        return products.value.products;
      }
      return products.value.products.filter(
        (product) => product.category === activeCategory.value
      );
    });

    const setActiveCategory = (category) => {
      activeCategory.value = category;
    };

    onMounted(async () => {
      await store.dispatch("main/getProducts").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      store,
      isLoading,
      products,
      categories,
      filteredProducts,
      setActiveCategory,
      activeCategory,
      getImg,
    };
  },
};
</script>

<style></style>
