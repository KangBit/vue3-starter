<script setup>
import BaseImageSlider from "@/components/common/BaseImageSlider.vue";

// const images = [
//   {
//     src: "https://www.kia.com/content/dam/kwp/kr/ko/main-kv-contents/202311/kv_the_new_carnival_pc.jpg",
//     description: "the new carnival",
//   },
//   {
//     src: "https://www.kia.com/content/dam/kwp/kr/ko/main-kv-contents/202311/kv_carnival_hi_limousine_pc.jpg",
//     description: "carnival hi limousine",
//   },
//   {
//     src: "https://www.kia.com/content/dam/kwp/kr/ko/main-kv-contents/202210/kv_k5_contract_pc.jpg",
//     description: "k5 contract",
//   },
//   {
//     src: "https://www.kia.com/content/dam/kwp/kr/ko/main-kv-contents/202308/kv_rayev_contract_pc.jpg",
//     description: "rayev contract",
//   },
// ];
const images = [0, 0, 0, 0];
</script>

<template>
  <BaseImageSlider :images="images" :auto-slide="true" />
</template>

<style lang="scss" scoped></style>
