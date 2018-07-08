<template>
  <div>
    <input
      type="checkbox"
      v-bind:name="elementId"
      v-bind:id="elementId"
      v-bind:value="item.id"
      v-bind:disabled="disabled"
      v-model="checked"
    />
    <label v-bind:for="elementId">{{item.title}}</label>
  </div>
</template>
<script src="./CheckboxItem.js"></script>

<style lang="scss">
  @import 'CheckboxItem.scss';
</style>
