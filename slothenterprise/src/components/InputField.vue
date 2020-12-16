<template>
  <div class="container">
    <label class="labelStyle">{{ labelText }}</label>
    <input
      class="inputStyle"
      :type="inputType"
      :name="inputText"
      :value="inputValue"
      @keyup="handleChange($event)"
    />
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    labelText: String,
    inputText: String,
    inputType: String,
    inputValue: String,
  },
  methods: {
    handleChange: function ($event) {
      this.$store.commit("changeGlobal", "New Name");
      console.log(this.$store.state.test);
      console.log($event.target.value);
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Ubuntu-B";
  src: local("Ubuntu-B"), url("../styles/Ubuntu-B.ttf") format("truetype");
}
.container {
  font-family: "Ubuntu-B";
  display: flex;
  flex-direction: column;
}

.labelStyle {
  color: white;
}

.inputStyle {
  border: none;
}
</style>
