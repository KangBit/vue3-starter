<script setup>
import { computed } from "vue";

// Emits & Props
const emits = defineEmits(["update:currPage"]);
const props = defineProps({
  currPage: { type: Number, default: 1 },
  totalPage: { type: Number, default: 1 },
});

// Computed
const pages = computed(() => {
  const size = 10;
  const start = props.currPage - ((props.currPage - 1) % size);
  const end = Math.min(start + size - 1, props.totalPage);

  return Array.from({ length: end - start + 1 }, (_, i) => {
    return start + i;
  });
});

const isDisabledFirstButton = computed(() => {
  return props.currPage === 1;
});
const isDisabledPrevButton = computed(() => {
  return ~~(props.currPage / 10) === 0;
});
const isDisabledNextButton = computed(() => {
  return ~~(props.currPage / 10) === ~~(props.totalPage / 10);
});
const isDisabledLastButton = computed(() => {
  return props.currPage === props.totalPage;
});

// Actions
const setPage = (pageNum) => {
  emits("update:currPage", pageNum);
};
</script>

<template>
  <div class="pagination-wrapper">
    <button
      class="icon first"
      :class="{ disabled: isDisabledFirstButton }"
      @click="setPage(1)"
    ></button>
    <button
      class="icon prev mr-4"
      :class="{ disabled: isDisabledPrevButton }"
      @click="setPage((currPage % 10) - 10)"
    ></button>
    <button
      v-for="page in pages"
      class="btn-page"
      :class="{ active: page === currPage }"
      :key="page"
      @click="setPage(page)"
    >
      <span>{{ page }}</span>
    </button>
    <button
      class="icon next ml-4"
      :class="{ disabled: isDisabledNextButton }"
      @click="setPage((currPage % 10) + 10)"
    ></button>
    <button
      class="icon last"
      @click="setPage(totalPage)"
      :class="{ disabled: isDisabledLastButton }"
    ></button>
  </div>
</template>

<style lang="scss" scoped>
.pagination-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-page {
  min-width: 32px;
  height: 32px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
}

button.active {
  background-color: red;
}
</style>
