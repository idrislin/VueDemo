<script setup lang="ts">
import { useDragLayer, type XYCoord } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'
import { useFormConfigsStore } from '@/store'
import FormThumbnail from './FormThumbnail.vue'

const store = useFormConfigsStore()

function getItemStyles(initialOffset: XYCoord | null, currentOffset: XYCoord | null) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    }
  }

  let { x, y } = currentOffset

  const transform = `translate(${x}px, ${y}px)`
  return {
    transform
  }
}

const collect = useDragLayer((monitor) => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))
const { itemType, isDragging, item, initialOffset, currentOffset } = toRefs(collect)
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 bg-white pointer-events-none"
    :style="getItemStyles(initialOffset, currentOffset)"
  >
    <div
      v-if="item !== null"
      role="BoxPreview"
      class="flex items-center justify-start gap-1 px-2 text-xs bg-blue-100 rounded h-9 hover:bg-blue-200"
    >
      <FormThumbnail
        :form-type="store.formConfigById(item?.id)?.formType ?? 'text'"
      ></FormThumbnail>
    </div>
  </div>
</template>
