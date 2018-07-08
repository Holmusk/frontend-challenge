<template>
  <div class="create-group-form">
    <input
      type="text"
      name="new-group-title"
      id="new-group-title"
      v-model.trim="newGroupTitle"
      placeholder="Group title"
    />
    <input type="button" value="Create group" v-on:click="createGroup" />
  </div>
</template>

<script src="./CreateGroupForm.js"></script>

<style lang="scss">
  @import 'CreateGroupForm.scss';
</style>
