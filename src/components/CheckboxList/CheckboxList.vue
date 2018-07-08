<template>
  <div>
    <div v-for="group in groups" v-bind:key="group.id">
      <CheckboxGroup v-bind:group="group" />
    </div>
  </div>
</template>

<script src="./CheckboxList.js"></script>

<style src="./CheckboxList.css"></style>
