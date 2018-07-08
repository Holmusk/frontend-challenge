<template>
  <div v-if="hasSelectedGroup">
    <input
      type="text"
      name="new-item-title"
      id="new-item-title"
      v-model.trim="newItemTitle"
      placeholder="Item title"
    />
    <input type="button" value="Create item" v-on:click="createItem" />
  </div>
</template>

<script src="./CreateItemForm.js"></script>

<style src="./CreateItemForm.css"></style>
