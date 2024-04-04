<script setup>
import SampleImageSlider from "@/components/sample/SampleImageSlider.vue";
import SamplePagenation from "@/components/sample/SamplePagenation.vue";
</script>

<template>
  <div class="dp-f flex-column gap-20">
    <SampleImageSlider />
    <SamplePagenation />
  </div>
</template>

<style lang="scss" scoped>
.gap-20 {
  gap: 40px;
}
</style>
