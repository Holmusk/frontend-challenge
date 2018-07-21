<template>
  <v-form>
    <v-text-field
      v-model.trim="newGroupTitle"
      label="Group title"
      clearable
      box
    />
    <v-btn @click.stop="createGroup">
      Create group
    </v-btn>
  </v-form>
</template>

<script src="./CreateGroupForm.js"></script>

<style scoped lang="scss">
  @import 'CreateGroupForm.scss';
</style>
