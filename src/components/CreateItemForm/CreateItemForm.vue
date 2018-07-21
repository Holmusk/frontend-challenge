<template>
  <v-form v-if="hasSelectedGroup">
    <v-text-field
      v-model.trim="newItemTitle"
      label="Item title"
      clearable
      box
    />
    <v-btn @click.stop="createItem">
      Create item
    </v-btn>
  </v-form>
</template>

<script src="./CreateItemForm.js"></script>

<style scoped lang="scss">
  @import 'CreateItemForm.scss';
</style>
