<script setup>
import { storeToRefs } from "pinia";
import { useModalStore } from "@/stores/modalStore";

import { MODAL_TYPE_CONFIRM } from "@/constants/types";

const store = useModalStore();
const { isOpen, modalProps } = storeToRefs(store);
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal" @wheel.prevent @scroll.prevent>
      <div class="modal-body">
        <div class="modal-title" v-if="modalProps.title && modalProps.title.length">
          <p>{{ modalProps.title }}</p>
        </div>
        <div class="modal-content">
          <p>{{ modalProps.content }}</p>
        </div>
        <div class="modal-buttons">
          <button class="btn-default" @click="store.closeModal">{{ modalProps.closeText }}</button>
          <button
            v-if="modalProps.type === MODAL_TYPE_CONFIRM"
            class="btn-default"
            @click="store.confirm"
          >
            {{ modalProps.confirmText }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss">
.modal {
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  min-width: 380px;
  max-width: 60vw;
}

.modal-title {
  p {
    font-size: x-large;
    font-weight: 800;
    text-align: center;
  }
}

.modal-content {
  p {
    text-align: center;
  }
}
.modal-buttons {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
}
</style>
