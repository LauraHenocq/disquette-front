<template>
  <v-container class="fill-height">
    <d-disquette-generator />
    <d-add-disquette-modale @add-disquette="addDisquette"/>
  </v-container>
</template>
<script>
import DDisquetteGenerator from '../components/DDisquetteGenerator'
import DAddDisquetteModale from '../components/DAddDisquetteModale'

export default {
  name: 'homepage',
  components: {
    DAddDisquetteModale,
    DDisquetteGenerator
  },
  methods: {
    async addDisquette (disquetteToAdd) {
      await this.$store.dispatch('addADisquette', disquetteToAdd)
    }
  }
}
</script>
