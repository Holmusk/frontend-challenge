<template>
  <v-toolbar app :color="bgColor" :dark="dark" fixed>
    <v-toolbar-side-icon @click.stop="onDrawerToggleClick" />
    <v-toolbar-title>Frontend Challenge</v-toolbar-title>
  </v-toolbar>
</template>

<script src="./AppToolbar.js"></script>

<style scoped lang="scss">
  @import 'AppToolbar.scss';
</style>
