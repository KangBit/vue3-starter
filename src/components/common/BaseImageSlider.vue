<script setup>
import { computed, onMounted, ref } from "vue";
import { useInterval } from "@/composables/useInterval";
import { DEFAULT_INTERVAL_DELAY } from "@/constants";

const colors = ["bisque", "cadetblue", "darkgray", "goldenrod"];

// Props
const props = defineProps({
  images: { type: Array, default: () => [1, 2, 3, 4] },
  autoSlide: { type: Boolean, default: false },
  autoSlideDelay: { type: Number, default: DEFAULT_INTERVAL_DELAY },
});

// Ref
const currSlideItem = ref(0);

// Computed
const transform = computed(() => {
  const transformSize = currSlideItem.value * 100;
  return `-${transformSize}%`;
});

// Composable
const { registInterval } = useInterval(rollingImage, props.autoSlideDelay);

// Actions
function rollingImage() {
  if (currSlideItem.value + 1 === props.images.length) {
    currSlideItem.value = 0;
  } else {
    currSlideItem.value = currSlideItem.value + 1;
  }
}

const onClickSliderNav = (index) => {
  currSlideItem.value = index;
  if (props.autoSlide) {
    registInterval();
  }
};

// LifeCycle
onMounted(() => {
  if (props.autoSlide) {
    registInterval();
  }
});
</script>

<template>
  <div class="dp-f flex-column align-items-center">
    <div class="image-slider-wrapper" @wheel.prevent @scroll.prevent>
      <div class="image-slider" :style="[`transform: translateX(${transform})`]">
        <template v-for="(image, i) in images" :key="image.src">
          <img v-if="image.src" class="slider-item" :src="image.src" :alt="image.description" />
          <div v-else class="slider-item" :style="{ backgroundColor: colors[i] }"></div>
        </template>
      </div>
    </div>

    <div class="slider-nav">
      <button
        v-for="(_, i) in images"
        :key="i"
        class="btn-bullet"
        :class="{ active: currSlideItem === i }"
        @click="onClickSliderNav(i)"
      ></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-slider-wrapper {
  border-radius: 8px;
  overflow-x: auto;
}

.image-slider {
  display: flex;
  width: 80vw;
  aspect-ratio: 16 / 9;
  transition: transform 0.5s ease-in-out;
}

.image-slider .slider-item {
  flex: 1 0 100%;
  width: 100%;
  height: 100%;
}

.slider-nav {
  display: flex;
  margin-top: 8px;
  gap: 8px;
}
</style>
