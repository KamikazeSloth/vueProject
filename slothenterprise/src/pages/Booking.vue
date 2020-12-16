<template>
  <form class="formContainer" @submit.prevent="sendEmail">
    <input-field inputText="user_name" inputType="text" labelText="Namn" />
    <input-field inputText="user_email" inputType="email" labelText="Email" />
    <input-field inputText="message" inputType="text" labelText="Meddelande" />
    <submit-button v-on="click" />
    {{this.$store.state.test}}
  </form>
</template>

<script>
import emailjs from "emailjs-com";
import InputField from "../components/InputField.vue";
import SubmitButton from '../components/SubmitButton.vue';

export default {
  components: { InputField, SubmitButton },
  methods: {
    sendEmail: (e) => {
      console.log(this.$store)
      if(this.$store.state.test) {
      emailjs
        .sendForm(
          "service_xklj84b",
          "template_mkjixjn",
          e.target,
          "user_QCNObBG5B2zy4EIjqT97l"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      } else {
        console.log("stopped")
      }
    },
  },
};
</script>

<style scoped>
  .formContainer {
    display: flex;
    flex-direction: column;
    width: 20rem;
  }
</style>

