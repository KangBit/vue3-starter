<script setup>
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/stores/commonStore";

const store = useCommonStore();
const { openProgress } = storeToRefs(store);
</script>

<template>
  <Teleport to="body">
    <div class="spinner-wrapper" v-if="openProgress" @wheel.prevent @scroll.prevent>
      <span class="spinner"></span>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.spinner-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
  width: 100vw;
  height: 100vh;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
