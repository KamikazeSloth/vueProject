<template>
  <div>
    <nav class="navBar">
      <router-link to="/"></router-link>
      <router-link to="/Booking">Booking</router-link>
      <router-link to="/Home">Home</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
components: {

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
    background-color: #bdbdfb;
    height: 2.5rem;
  }
</style>
