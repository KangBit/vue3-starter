import { ref } from "vue";
import { defineStore } from "pinia";

import { MODAL_TYPE_ALERT, MODAL_TYPE_CONFIRM } from "@/constants/types";

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref(false);
  const modalProps = ref({
    type: MODAL_TYPE_ALERT,
    title: "",
    content: "",
    confirmText: "확인",
    closeText: "확인",
    onConfirm: null,
  });

  const openModal = (type = MODAL_TYPE_ALERT, params = {}) => {
    modalProps.value = { ...modalProps.value, type, ...params };
    isOpen.value = true;
  };

  const openAlert = (params = {}) => {
    openModal(MODAL_TYPE_ALERT, params);
  };

  const openConfirm = (params = {}) => {
    openModal(MODAL_TYPE_CONFIRM, params);
  };

  const closeModal = () => {
    isOpen.value = false;
  };

  const confirm = () => {
    if (typeof modalProps.value.onConfirm === "function") {
      modalProps.value.onConfirm();
    } else {
      isOpen.value = false;
    }
  };

  return { isOpen, modalProps, openAlert, openConfirm, closeModal, confirm };
});
