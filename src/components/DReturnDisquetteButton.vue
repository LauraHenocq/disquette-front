<template>
  <v-btn rounded color="blue" @click="changeReturnedDisquette" :loading="isLoading" class="pa-8">
    Bouton
  </v-btn>
</template>
<script>
export default {
  name: 'DReturnDisquetteButton',
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    disquette () {
      return this.$store.getters.getReturnedDisquette
    }
  },
  methods: {
    changeReturnedDisquette () {
      this.$store.dispatch('setANewReturnedDisquette')

      const randomWaitingTime = (Math.floor(Math.random() * 5) + 1) * 1000

      this.isLoading = true

      setTimeout(() => {
        this.isLoading = false
        this.$emit('change-disquette', this.disquette)
      }, randomWaitingTime)
    }
  }
}
</script>
