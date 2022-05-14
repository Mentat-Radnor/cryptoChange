<template>
  <Header />
  <router-view></router-view>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Exchange from "@/view/Exchange.vue";
</script>

<style>
@import "@/assets/style/main.scss";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

:root {
  --transition-time: 0.3s;

  --white: hsl(0, 0%, 100%);
  --trasparent: hsla(0, 0%, 100%, 0);
  --primary-lightest: hsl(212, 24%, 94%);
  --primary-light: hsl(212, 32%, 66%);
  --primary: hsl(212, 72%, 26%);
  --primary-dark: hsl(215, 66%, 22%);
  --primary-darkest: hsl(212, 72%, 16%);
  --accent: hsl(39, 96%, 71%);
}
</style>
