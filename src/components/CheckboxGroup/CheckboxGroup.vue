<template>
  <div>
    <input
      type="radio"
      name="group"
      v-bind:id="elementId"
      v-bind:value="group.id"
      v-model="selectedGroupId"
    />
    <label v-bind:for="elementId">{{group.title}}</label>

    <div class="checkbox-group-items-container">
      <div v-for="item in items" v-bind:key="item.id">
        <CheckboxItem
          v-bind:item="item"
          v-bind:disabled="disabled"
        />
      </div>
    </div>
  </div>
</template>

<script src="./CheckboxGroup.js"></script>

<style lang="scss">
  @import 'CheckboxGroup.scss';
</style>
