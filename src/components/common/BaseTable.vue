<script setup>
const emits = defineEmits(["rowClick"]);
defineProps({
  headers: {
    type: Array,
    default: () => {
      return [];
    },
  },
  data: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, i) in headers" :key="i" :style="header.style">
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-if="!data || !data.length">
        <tr>
          <td :colspan="headers.length">
            <div class="no-data">등록된 게시글이 없습니다</div>
          </td>
        </tr>
      </template>
      <template v-else>
        <slot v-for="item in data" :key="item.id" :row="item">
          <tr @click="emits('rowClick', item)">
            <td v-for="header in headers" :key="`${item.id}-${header.key}`">
              {{ item[header.key] }}
            </td>
          </tr>
        </slot>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
  table-layout: fixed;
}

thead {
  background-color: #f0f3f8;
}

td {
  padding-inline: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}

tbody {
  tr {
    height: 3rem;
  }
}

.no-data {
  min-height: 30rem;
}
</style>
