<template>
  <form id="emailForm" class="formContainer" @submit.prevent="sendEmail()">
    <input-field
      @childValue="childValue"
      inputText="user_name"
      inputType="text"
      labelText="Namn"
    />
    <input-field 
      @childValue="childValue"
      inputText="user_email" 
      inputType="email" 
      labelText="Email" />
    <input-field 
      @childValue="childValue"
      inputText="message" 
      inputType="text" 
      labelText="Meddelande" />
    <submit-button v-on="click" />
  </form>
</template>

<script>
import emailjs from "emailjs-com";
import InputField from "../components/InputField.vue";
import SubmitButton from "../components/SubmitButton.vue";

export default {
  components: { InputField, SubmitButton },
  data: function() {
    return {
        inputName: ''
    }
  },
  methods: {
    childValue(value) {
      this.inputName = value
      console.log(this.inputName);
    },
    sendEmail() {
      console.log("send")
      if(this.$data.inputName) {
        console.log("success")
      } else {
        console.log("block")
        return
      }
        emailjs
          .sendForm(
            "service_xklj84b",
            "template_mkjixjn",
            document.getElementById("emailForm"),
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

