<template>
  <loader v-if="isLoading" />
  <section v-else class="contacts">
    <div class="container">
      <div class="contacts__inner">
        <span class="suptitle"> Contact us </span>
        <div class="title">Chat to our friendly team</div>
        <div class="subtitle">
          We’d love to hear from you. Please fill out this form or shoot us an
          email.
        </div>
        <div class="contacts__flex">
          <div class="contacts__wrap">
            <div class="content">
              <div v-for="(item, i) in info" :key="i">
                <img :src="require(`@/assets/images/${item.icon}`)" alt="" />
                <span>{{ item.title }}</span>
                <p>{{ item.content }}</p>
              </div>
            </div>

            <form action="" class="form">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Mobile number" />
              <textarea placeholder="Question"></textarea>
              <button class="button">Send</button>
            </form>
          </div>
          <div class="maps">
            <iframe
              src="https://maps.google.com/maps?q=almaty&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loader from "@/components/global/Loader.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: { Loader },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const info = ref([
      {
        icon: "tel.svg",
        title: "Tel",
        content: "+7 (727) 339 5575",
      },
      {
        icon: "tel.svg",
        title: "Mobile",
        content: "+7 (727) 339 5575",
      },
      {
        icon: "mail.svg",
        title: "Email",
        content: "v.fedulov@forteofs.com",
      },
      {
        icon: "location.svg",
        title: "Office",
        content:
          "Republic of Kazakhstan, Almaty 050040, Bukhar Zhyrau 35 # 344 'Prestige'",
      },
    ]);

    const contacts = computed(() => store.state.contacts.data);

    onMounted(async () => {
      await store.dispatch("main/getContacts").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      info,
      isLoading,
      store,
      contacts,
    };
  },
};
</script>

<style></style>
