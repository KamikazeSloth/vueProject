<template>
  <input class="submitStyle" type="submit" value="Send" />
</template>

<script>
export default {
  name: "SubmitButton",
};
</script>

<style scoped>
@font-face {
  font-family: "Ubuntu-B";
  src: local("Ubuntu-B"), 
  url('../styles/Ubuntu-B.ttf') format("truetype");
  }
.submitStyle {
  font-family: 'Ubuntu-B';
  border: none;
  width: 100%;
  height: 2rem;
  background-color: #acfdfd;
}
</style>
