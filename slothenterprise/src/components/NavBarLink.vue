<template>
    <li class="NavBarLink">
    {{ msg }}  
    </li>
</template>

<script>
export default {
  name: 'NavBarLink',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .NavBarLink {
        list-style-type:none;
    }
</style>
