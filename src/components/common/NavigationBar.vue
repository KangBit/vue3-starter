<script setup>
import { RouterLink } from "vue-router";

const routes = [{ link: "/", text: "홈" }];
</script>

<template>
  <nav class="nav-bar">
    <ul class="dp-f">
      <li v-for="route in routes" :key="route.link">
        <RouterLink :to="route.link">{{ route.text }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  z-index: 1;
  font-size: 1.3rem;
  font-weight: bold;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;

  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.1));
}

ul {
  width: 100%;
  align-items: center;
  justify-content: center;
}

li {
  margin-inline: 12px;
}
</style>
