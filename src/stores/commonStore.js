import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const requestLoadings = ref(0);

  const openProgress = computed(() => {
    return requestLoadings.value > 0;
  });

  const openGlobalProgress = () => {
    requestLoadings.value = requestLoadings.value + 1;
  };

  const closeGlobalProgress = (forced = false) => {
    if (forced) {
      requestLoadings.value = 0;
    } else {
      requestLoadings.value = requestLoadings.value - 1;
    }
  };

  return { openProgress, openGlobalProgress, closeGlobalProgress };
});
