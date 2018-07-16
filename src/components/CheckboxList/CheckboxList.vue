<template>
  <div>
    <div v-for="group in groups" :key="group.id">
      <CheckboxGroup :group="group" />
    </div>
  </div>
</template>

<script src="./CheckboxList.js"></script>

<style scoped lang="scss">
  @import 'CheckboxList.scss';
</style>
