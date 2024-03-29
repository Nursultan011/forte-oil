<template>
  <loader v-if="isLoading" />
  <section v-else class="contacts">
    <div class="container">
      <div class="contacts__inner">
        <span
          class="suptitle"
          v-if="contacts && contacts.content && contacts.content.label"
        >
          {{ contacts.content.label }}
        </span>
        <div
          class="title"
          v-if="contacts && contacts.content && contacts.content.title"
        >
          {{ contacts.content.title }}
        </div>
        <div
          class="subtitle"
          v-if="contacts && contacts.content && contacts.content.description"
        >
          {{ contacts.content.description }}
        </div>
        <div class="contacts__flex">
          <div class="contacts__wrap">
            <div
              class="content"
              v-for="(item, i) in selectedSubTabData.contacts"
              :key="i"
              v-if="selectedSubTabData && selectedSubTabData.contacts"
            >
              <div v-if="item.tel_number">
                <img :src="require(`@/assets/images/tel.svg`)" alt="" />
                <span>Tel</span>
                <p>{{ item.tel_number }}</p>
              </div>
              <div v-if="item.phone_number">
                <img :src="require(`@/assets/images/tel.svg`)" alt="" />
                <span>Mobile</span>
                <p>{{ item.phone_number }}</p>
              </div>
              <div v-if="item.email">
                <img :src="require(`@/assets/images/mail.svg`)" alt="" />
                <span>Mobile</span>
                <p>{{ item.email }}</p>
              </div>
              <div v-if="item.address">
                <img :src="require(`@/assets/images/location.svg`)" alt="" />
                <span>Office</span>
                <p>{{ item.address }}</p>
              </div>
            </div>

            <form @submit.prevent="send" class="form">
              <input
                required
                v-model="form.full_name"
                type="text"
                :placeholder="$t('name')"
              />
              <input
                v-model="form.phone_number"
                type="text"
                required
                @input="onInput"
                :placeholder="$t('mobile_number')"
              />
              <input
                required
                v-model="form.email"
                type="text"
                placeholder="E-mail"
                @input="onEmailInput"
              />
              <input
                v-model="form.company_name"
                type="text"
                required
                :placeholder="$t('company')"
              />
              <textarea
                required
                v-model="form.comments"
                :placeholder="$t('comments')"
              ></textarea>
              <span v-if="error" class="err">{{ error }}</span>
              <button type="submit" class="button">{{ $t("send") }}</button>
            </form>
          </div>
          <div class="maps">
            <ul class="tabs">
              <li
                class="tab"
                v-for="(item, i) in contacts.countries"
                :key="i"
                :class="{ active: activeTab === i }"
                @click="setActiveTab(i)"
              >
                {{ item.title }}
              </li>
            </ul>
            <div
              class="tab__content"
              v-if="selectedTabData && selectedTabData.cities"
            >
              <ul class="subtabs">
                <li
                  class="subtab"
                  v-for="(item, i) in selectedTabData.cities"
                  :key="i"
                  :class="{ active: activeSubTab === i }"
                  @click="setActiveSubTab(i)"
                >
                  {{ item.title }}
                </li>
              </ul>
            </div>
            <div v-if="selectedSubTabData && selectedSubTabData.contacts" v-for="(map, i) in selectedSubTabData.contacts" :key="i">
              <iframe
              :src="map.map_loc"
              frameborder="0"
              scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from "@/components/global/Loader.vue";
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
export default {
  components: { Loader },
  setup() {
    const store = useStore();
    const isLoading = ref(true);
    const contacts = computed(() => store.state.main.contacts?.data);
    const activeTab = ref(0);
    const activeSubTab = ref(0);
    const { locale } = useI18n({ useScope: "global" });

    const selectedTabData = computed(() => {
      if (contacts.value && contacts.value.countries) {
        return contacts.value.countries[activeTab.value];
      }
    });

    const selectedSubTabData = computed(() => {
      if (selectedTabData.value && selectedTabData.value.cities) {
        return (
          (selectedTabData.value.cities &&
            selectedTabData.value.cities[activeSubTab.value]) ||
          {}
        );
      }
    });

    console.log(selectedSubTabData.value);

    const setActiveTab = (index) => {
      activeTab.value = index;
      activeSubTab.value = 0;
    };

    const setActiveSubTab = (index) => {
      activeSubTab.value = index;
    };

    const form = ref({
      name: "",
      phone_number: "",
      email: "",
      company_name: "",
      comments: "",
    });

    const error = ref(null);

    const send = async () => {
      await store
        .dispatch("main/postRequest", form.value)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          if (err && err.data && err.data.msg) {
            error.value = err.data.msg;
          }
        });
    };

    const onEmailInput = (event) => {
      let value = event.target.value;

      if (value.length === 1 && value !== "@") {
        value = value + "@";
      }

      form.value.email = value;
    };

    const onInput = (event) => {
      const value = event.target.value;
      const onlyDigits = value.replace(/\D/g, "");

      form.value.phone_number = onlyDigits;
    };

    onMounted(async () => {
      await store.dispatch("main/getContacts").then((res) => {
        isLoading.value = false;
      });
    });

    watch(locale, async (val) => {
      isLoading.value = true;

      await store.dispatch("main/getContacts").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      isLoading,
      store,
      contacts,
      form,
      error,
      send,
      onEmailInput,
      onInput,
      activeTab,
      activeSubTab,
      selectedTabData,
      selectedSubTabData,
      setActiveTab,
      setActiveSubTab,
    };
  },
};
</script>

<style></style>
