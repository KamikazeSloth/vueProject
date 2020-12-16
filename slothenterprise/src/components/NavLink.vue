<template>
  <router-link class="navLinkStyle" :to="hrefProp"></router-link>
</template>

<script>
export default {
  components: {},
  name: "NavLink",
  props: {
    hrefProp: String,
  },
};
</script>

<style scoped>
.navLinkStyle {
  height: 100%;
  background-color: blue;
}
</style>
