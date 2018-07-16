<template>
  <v-app>
    <AppDrawer :show="drawerVisible" />
    <AppToolbar :bgColor="bgColor" :dark="dark" :onDrawerToggleClick="toggleDrawer" />
    <AppContent />
    <AppFooter :bgColor="bgColor" :dark="dark" />
  </v-app>
</template>

<script src="./App.js"></script>

<style scoped lang="scss">
  @import 'App.scss';
</style>
