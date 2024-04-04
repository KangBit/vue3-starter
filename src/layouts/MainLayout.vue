<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "@/components/common/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <div class="main-content">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin-top: 80px;
  padding: 0 10vw 5vw 10vw;
}
</style>
