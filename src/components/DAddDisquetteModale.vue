<template>
  <div>
    <v-btn
      fab
      outlined
      x-small
      elevation="0"
      color="red"
      class="mr-4"
      @click="openModal = true"
    >
      +
    </v-btn>
    <v-dialog
      v-model="openModal"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h6 grey lighten-2">
          Ajouter une nouvelle disquette
        </v-card-title>

        <v-card-text class="py-6">
          Saisissez la disquette
        </v-card-text>

        <v-card-text>
          <v-row>
            <v-text-field
              v-model="disquette"
              background-color="white"
              outlined
              :rules="rules.disquette"
              label="Disquette à ajouter"
              required
            />
          </v-row>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            @click="openModal = false"
          >
            Annuler
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="addDisquette"
            :disabled="!disquette"
          >
            Sauvegarder
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'DAddDisquetteModale',
  data () {
    return {
      disquette: '',
      openModal: false,
      rules: {
        disquette: [
          v => !!v || 'La saisie de la disquette est requise.'
        ]
      }
    }
  },
  methods: {
    addDisquette () {
      this.$emit('add-disquette', this.disquette)
      this.openModal = false
      this.disquette = ''
    }
  }
}
</script>
