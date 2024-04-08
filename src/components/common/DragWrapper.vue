<script lang="ts" setup>
import { ref, type VNodeRef } from 'vue'
import { useDrag, useDrop } from 'vue3-dnd'
import type { Identifier } from 'dnd-core'
import { toRefs } from '@vueuse/core'

const props = defineProps<{
  id: string
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
}>()

interface DragItem {
  index: number
  id: string
  type: string
}

const card = ref<HTMLDivElement>()
const [dropCollect, drop] = useDrop<
  DragItem,
  void,
  { handlerId: Identifier | null; isShallowOver: boolean }
>({
  accept: 'card',
  collect(monitor) {
    return {
      handlerId: monitor.getHandlerId(),
      isShallowOver: monitor.isOver({ shallow: true })
    }
  },
  drop(item: DragItem) {
    const dragIndex = item.index
    const hoverIndex = props.index
    if (dragIndex === hoverIndex) {
      return
    }
    props.moveCard(dragIndex, hoverIndex)
    item.index = hoverIndex
  }
})

const [collect, drag] = useDrag({
  type: 'card',
  item: () => {
    return { id: props.id, index: props.index }
  },
  collect: (monitor: any) => ({
    isDragging: monitor.isDragging()
  })
})

const { handlerId, isShallowOver } = toRefs(dropCollect)
const { isDragging } = toRefs(collect)

const setRef: VNodeRef | undefined = (el) => {
  const el1 = el as HTMLDivElement
  card.value = drag(drop(el1))
}
</script>

<template>
  <div class="relative py-2">
    <div
      :ref="setRef"
      :class="[
        'px-4 py-2 bg-white border border-gray-300 border-dashed',
        isDragging ? 'cursor-grabbing bg-black' : 'cursor-grab'
      ]"
      :style="{ opacity: isDragging ? 0 : 1 }"
      :data-handler-id="handlerId"
    >
      <slot></slot>
    </div>
    <div
      v-if="isShallowOver && !isDragging"
      :class="['absolute w-full h-0.5 bg-blue-500', props.index === 0 ? 'top-0' : 'bottom-0']"
    ></div>
  </div>
</template>
