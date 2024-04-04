import { onMounted, onUnmounted } from "vue";

export const useBeforeUnload = () => {
  onMounted(() => {
    window.onbeforeunload = () => {
      return "unload";
    };
  });

  onUnmounted(() => {
    window.onbeforeunload = null;
  });
  return {};
};
