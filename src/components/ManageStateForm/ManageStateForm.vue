<template>
  <div class="manage-state">
    <textarea
      name="serialized-state"
      id="serialized-state"
      v-model="serializedState"
      placeholder="Please paste state here in JSON format"
    >
    </textarea>

    <input type="button" value="Set state" v-on:click="setState" />
    <input type="button" value="Copy state to clipboard" v-on:click="copyState" />
    <input type="button" value="Load state" v-on:click="loadState" />
  </div>
</template>

<script src="./ManageStateForm.js"></script>

<style lang="scss">
  @import 'ManageStateForm.scss';
</style>
