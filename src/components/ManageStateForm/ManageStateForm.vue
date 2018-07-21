<template>

  <v-form>
    <v-textarea
      v-model.trim="serializedState"
      placeholder="Please paste state here in JSON format"
      auto-grow
      no-resize
      clearable
      box
    />
    <v-btn @click.stop="setState">
      Set state
    </v-btn>
    <v-btn @click.stop="copyState">
      Copy state to clipboard
    </v-btn>
    <v-btn @click.stop="loadState">
      Load state
    </v-btn>
  </v-form>
</template>

<script src="./ManageStateForm.js"></script>

<style scoped lang="scss">
  @import 'ManageStateForm.scss';
</style>
