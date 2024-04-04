import { ref, onUnmounted } from "vue";

export const useInterval = (func, delay) => {
  const interval = ref(null);

  const registInterval = () => {
    if (interval.value !== null) {
      removeInterval();
    }

    interval.value = setInterval(func, delay);
  };

  const removeInterval = () => {
    clearInterval(interval.value);
    interval.value = null;
  };

  onUnmounted(() => {
    removeInterval();
  });

  return { registInterval };
};
