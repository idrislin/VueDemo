<template>
  <div class="py-4">
    <component :is="currentComponent" :data="item" v-model="value"></component>
  </div>
</template>

<script setup lang="ts">
import SelectMenu from '../common/SelectMenu.vue'
import TextField from '../common/TextField.vue'
import CheckboxList from '../common/CheckboxList.vue'
import RadioList from '../common/RadioList.vue'
import type { FormConfig } from '@/models/Form'

type ComponentType =
  | typeof SelectMenu
  | typeof TextField
  | typeof CheckboxList
  | typeof RadioList
  | null

const componentMap: Record<string, ComponentType> = {
  selector: SelectMenu,
  text: TextField,
  checkbox: CheckboxList,
  radio: RadioList
}

let currentComponent: ComponentType = null

const loadComponent = (type: string) => {
  if (componentMap[type]) {
    currentComponent = componentMap[type]
  } else {
    console.error(`Unknown component type: ${type}`)
  }
}

const value = defineModel<any>({ required: true })
const { item } = defineProps<{
  item: FormConfig
}>()
loadComponent(item.formType)
</script>
