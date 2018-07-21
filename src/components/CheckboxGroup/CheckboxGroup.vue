<template>
  <div>
    <input
      type="radio"
      name="group"
      :id="elementId"
      :value="group.id"
      v-model="selectedGroupId"
    />
    <label :for="elementId">{{group.title}}</label>

    <div class="checkbox-group-items-container">
      <div v-for="item in items" :key="item.id">
        <CheckboxItem
          :item="item"
          :disabled="disabled"
        />
      </div>
    </div>
  </div>
</template>

<script src="./CheckboxGroup.js"></script>

<style scoped lang="scss">
  @import 'CheckboxGroup.scss';
</style>
