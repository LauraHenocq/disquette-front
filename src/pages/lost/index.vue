<template>
  <v-container fill-height>
    <v-row justify="center">
      <p>I'm lost...</p>
    </v-row>
    <v-img contain max-height="400" src="https://c.tenor.com/9zXKMcynQKIAAAAC/stickergiant-lost.gif"/>
  </v-container>
</template>
<script>
export default {
  name: 'index',
  created () {
    setTimeout(() => {
      this.$router.push({name: 'Homepage'})
    }, 5000)
  }
}
</script>
