<template>
  <section class="products">
    <div class="container">
      <div class="products__inner">
        <div class="products__header">
          <span class="suptitle"> ForteOil products </span>
          <div class="title">Quick at market needs reacting</div>
          <div class="subtitle">
            “Forte Oil Field Services” LLP provides a wide range of services and
            products’ assortment. We always hear our clients and are happy to
            offer individual “be-spoke” solutions.
          </div>
        </div>
        <div class="products__content">
          <div class="products__categories">
            <p>Category</p>
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
              <img :src="require(`@/assets/images/${product.img}`)" alt="" />
              <div class="products__card-content">
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
                <ul class="flex">
                  <li v-if="product.manufacturer">
                    <span>Manufacturer:</span>
                    <p>
                      {{ product.manufacturer }}
                    </p>
                  </li>
                  <li v-if="product.power">
                    <span>Power:</span>
                    <p>
                      {{ product.power }}
                    </p>
                  </li>
                  <li v-if="product.area">
                    <span> Area: </span>
                    <p>
                      {{ product.area }}
                    </p>
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
import { ref, computed } from "vue";
export default {
  setup() {
    const products = ref([
      {
        img: "product-1.jpg",
        category: "Generators",
        title: "Power Generating",
        description:
          "Sound pressure effect, cover is of welding structure with the Zintec rust protection and locking doors. Fuel tank with the low fuel sensor Spark preventer dumper with the prevention from the dregs intrusion. Automatic warning and emergency signals",
        manufacturer: "Globe Power",
        power: "from50 kW to 2000 kW",
        area: "from 700 to 5000 sq.m",
      },
      {
        img: "product-2.jpg",
        category: "Industrial systems of air chilling",
        title: "Lighting towers",
        description:
          "Sound pressure effect, cover is of welding structure with the Zintec rust protection and locking doors. Fuel tank with the low fuel sensor Spark preventer dumper with the prevention from the dregs intrusion. Automatic warning and emergency signals",
        manufacturer: "Globe Power",
        power: "from50 kW to 2000 kW",
        area: "from 700 to 5000 sq.m",
      },
      {
        img: "product-3.jpg",
        category: "Dryers",
        title: "Power Generating",
        description:
          "Sound pressure effect, cover is of welding structure with the Zintec rust protection and locking doors. Fuel tank with the low fuel sensor Spark preventer dumper with the prevention from the dregs intrusion. Automatic warning and emergency signals",
        manufacturer: "Globe Power",
        power: "from50 kW to 2000 kW",
        area: "from 700 to 5000 sq.m",
      },
    ]);

    const activeCategory = ref("View all");

    const categories = computed(() => {
      const uniqueCategories = new Set();
      products.value.forEach((product) =>
        uniqueCategories.add(product.category)
      );
      return ["View all", ...uniqueCategories];
    });

    const filteredProducts = computed(() => {
      if (activeCategory.value === "View all") {
        return products.value;
      }
      return products.value.filter(
        (product) => product.category === activeCategory.value
      );
    });

    // Установка активной категории
    const setActiveCategory = (category) => {
      activeCategory.value = category;
    };

    return {
      products,
      categories,
      filteredProducts,
      setActiveCategory,
      activeCategory,
    };
  },
};
</script>

<style></style>
