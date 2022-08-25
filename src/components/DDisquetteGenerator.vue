<template>
  <v-row class="flex-column">
    <v-row>
      <v-col class="text-h2 text-center pa-2">
        La disquette
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text text-center pa-2">
        <p> {{ disquette }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center pa-2">
        <d-return-disquette-button @change-disquette="returnANewDisquette" />
      </v-col>
    </v-row>
  </v-row>
</template>
<script>
import DReturnDisquetteButton from '../components/DReturnDisquetteButton'

export default {
  name: 'DDisquetteGenerator',
  components: {
    DReturnDisquetteButton
  },
  data () {
    return {
      disquette: 'Retourner une disquette'
    }
  },
  methods: {
    returnANewDisquette (newDisquette) {
      this.disquette = newDisquette
    }
  }
}
</script>
