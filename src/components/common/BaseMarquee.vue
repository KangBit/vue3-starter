<script setup>
import { useSlots, ref, onMounted } from "vue";

const slots = useSlots();

const marqee = ref();
const marqeeList = ref();

const isActive = ref();

onMounted(() => {
  const marqeeWidth = marqee.value.offsetWidth;
  const marqueeListWidth = marqeeList.value.offsetWidth;
  isActive.value = marqeeWidth < marqueeListWidth;
});
</script>

<template>
  <div class="marquee" ref="marqee">
    <div class="marquee-list" ref="marqeeList" :class="{ active: isActive }">
      <slot></slot>
    </div>
    <div class="marquee-list active" v-if="isActive">
      <component :is="slots.default"></component>
    </div>
  </div>
</template>

<style scoped lang="scss">
.marquee {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.marquee-list {
  display: flex;
}

.marquee-list.active {
  animation: slide-left 10s linear infinite;
}

@keyframes slide-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
