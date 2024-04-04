<script setup>
import BasePagination from "@/components/common/BasePagination.vue";

import { ref } from "vue";

const currPage = ref(1);
</script>

<template>
  <BasePagination v-model:curr-page="currPage" :total-page="13" />
</template>

<style lang="scss" scoped></style>
