<template>
  <section class="request">
    <div class="container">
      <div class="request__inner">
        <div class="content">
          <p class="title">Get in touch</p>
          <p class="subtitle">
            Fill out the form and submit it, our manager will contact you as
            soon as possible
          </p>
        </div>
        <form action="" class="form">
          <input v-model="form.name" type="text" placeholder="Name" />
          <input
            v-model="form.phone_number"
            type="text"
            placeholder="Mobile number"
          />
          <input v-model="form.email" type="text" placeholder="E-mail" />
          <input
            v-model="form.company_name"
            type="text"
            placeholder="Company"
          />
          <textarea v-model="form.comments" placeholder="Comments"></textarea>
          <button class="button">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const form = ref({
      name: "",
      phone_number: "",
      email: "",
      company_name: "",
      comments: "",
    });

    return {
      form,
    };
  },
};
</script>

<style></style>
