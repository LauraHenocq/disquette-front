<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  async created () {
    await this.$store.dispatch('getAllDisquettes')
  }
}
</script>
