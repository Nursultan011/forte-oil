<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__inner">
        <span class="suptitle"> Contact us </span>
        <div class="title">Chat to our friendly team</div>
        <div class="subtitle">
          We’d love to hear from you. Please fill out this form or shoot us an
          email.
        </div>
        <div class="contacts__wrap">
          <div class="content">
            <div v-for="(item, i) in info" :key="i">
              <img :src="require(`@/assets/images/${item.icon}`)" alt="" />
              <span>{{ item.title }}</span>
              <p>{{ item.content }}</p>
            </div>
          </div>
          <div class="maps">MAPS</div>
          <form action="" class="form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Mobile number" />
            <textarea placeholder="Question"></textarea>
            <button class="button">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
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

    return {
      info,
    };
  },
};
</script>

<style></style>
