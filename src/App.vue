<script setup>
import { RouterView } from "vue-router";
import BaseModal from "@/components/common/BaseModal.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
</script>

<template>
  <div>
    <RouterView />
  </div>
  <BaseModal />
  <LoadingSpinner />
</template>

<style scoped></style>
