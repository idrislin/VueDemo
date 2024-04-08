<template>
  <button
    class="flex items-center justify-start gap-1 px-2 text-xs bg-blue-100 rounded h-9 hover:bg-blue-200"
  >
    <component :is="currentComponent?.value" class="w-4 h-4 text-blue-500" />
    {{ currentComponent?.label }}
  </button>
</template>

<script setup lang="ts">
import IconRadio from '@/components/icons/IconRadio.vue'
import IconTextfield from '@/components/icons/IconTextfield.vue'
import IconCheckbox from '@/components/icons/IconCheckbox.vue'
import IconSelect from '@/components/icons/IconSelect.vue'
import type { FormType } from '@/models/Form'

type ComponentType =
  | typeof IconRadio
  | typeof IconTextfield
  | typeof IconCheckbox
  | typeof IconSelect
  | null

const componentMap: Record<string, { label: string; value: ComponentType }> = {
  selector: { label: '下拉菜单', value: IconSelect },
  text: { label: '输入框', value: IconTextfield },
  checkbox: { label: '复选框', value: IconCheckbox },
  radio: { label: '单选', value: IconRadio }
}

let currentComponent: { label: string; value: ComponentType } | null = null

const loadComponent = (type: string) => {
  if (componentMap[type]) {
    currentComponent = componentMap[type]
  } else {
    console.error(`Unknown component type: ${type}`)
  }
}

const { formType } = defineProps<{ formType: FormType }>()
loadComponent(formType)
</script>
