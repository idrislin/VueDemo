<template>
  <component :is="currentComponent" :data="item" v-model="value"></component>
</template>

<script setup lang="ts">
import SelectMenu from '../common/SelectMenu.vue'
import TextField from '../common/TextField.vue'
import CheckboxList from '../common/CheckboxList.vue'
import type { FormConfig } from '@/models/Form'

type ComponentType = typeof SelectMenu | typeof TextField | typeof CheckboxList | null

const componentMap: Record<string, ComponentType> = {
  selector: SelectMenu,
  text: TextField,
  checkbox: CheckboxList
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
