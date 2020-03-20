<template>
  <nav class="navBar">
    <NavBarLink msg="link 1"/>
    <NavBarLink msg="link 2"/>
    <NavBarLink msg="link 3"/>
  </nav>
</template>

<script>
import NavBarLink from './NavBarLink.vue'

export default {
components: {
    NavBarLink
  },
  name: 'NavigationBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navBar {
        display: flex;
        flex-direction: row;
    }
</style>
