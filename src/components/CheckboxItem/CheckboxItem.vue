<template>
  <div>
    <input
      type="checkbox"
      :name="elementId"
      :id="elementId"
      :value="item.id"
      :disabled="disabled"
      v-model="checked"
    />
    <label :for="elementId">{{item.title}}</label>
  </div>
</template>
<script src="./CheckboxItem.js"></script>

<style scoped lang="scss">
  @import 'CheckboxItem.scss';
</style>
