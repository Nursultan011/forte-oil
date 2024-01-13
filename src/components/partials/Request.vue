<template>
  <section class="request">
    <div class="container">
      <div class="request__inner">
        <div class="content">
          <p class="title" v-if="$props.request && $props.request.title">
            {{ $props.request.title }}
          </p>
          <p
            class="subtitle"
            v-if="$props.request && $props.request.description"
          >
            {{ $props.request.description }}
          </p>
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
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["request"],
  setup() {
    const store = useStore();

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

    return {
      form,
      store,
      send,
      error,
      onEmailInput,
      onInput,
    };
  },
};
</script>

<style></style>
