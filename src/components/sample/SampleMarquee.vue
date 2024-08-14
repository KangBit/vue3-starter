<script setup>
import BaseMarquee from "@/components/common/BaseMarquee.vue";
</script>

<template>
  <div class="marquee-wrapper">
    <BaseMarquee>
      <div class="marquee-item" v-for="i in 5" :key="i">{{ i }}</div>
    </BaseMarquee>
  </div>
</template>

<style scoped lang="scss">
.marquee-wrapper {
  width: 50%;
}

.marquee-item {
  width: 230px;
  height: 120px;
  border-radius: 10px;
  background-color: steelblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}
</style>
