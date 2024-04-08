<template>
  <div class="card flex flex-col h-[2000px]">
    <div class="flex items-center justify-center w-full py-5 border-b cursor-pointer">
      <p>表头图片</p>
    </div>
    <div class="flex flex-col px-8 divide-y">
      <DropWrapper
        v-for="(item, index) in store.formConfigs"
        :id="item.id"
        :key="item.id"
        :index="index"
        :move-card="moveCard"
      >
        <FormComponent :item="item" v-model="formData[item.key]" />
      </DropWrapper>
      <DragPreview></DragPreview>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormComponent from './FormComponent.vue'
import DropWrapper from '../common/DragWrapper.vue'
import DragPreview from './DragPreview.vue'
import { useFormConfigsStore } from '@/store'

const store = useFormConfigsStore()
function moveCard(dragIndex: number, hoverIndex: number) {
  console.log(dragIndex)
  console.log(hoverIndex)
  const active = store.formConfig(dragIndex)
  store.spliceConfig(dragIndex, 1)
  store.spliceConfig(hoverIndex, 0, active)
}
const formData = defineModel<{ [key: string]: any }>({ required: true })
</script>
