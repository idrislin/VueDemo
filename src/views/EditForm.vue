<script setup lang="ts">
import FormCard from '@/components/EditForm/FormCard.vue'
import FormThumbnail from '@/components/EditForm/FormThumbnail.vue'
import type { FormType } from '@/models/Form'
import { ref, watch } from 'vue'

const components: { label: string; value: FormType }[] = [
  { label: '输入框', value: 'text' },
  { label: '单选', value: 'selector' },
  { label: '复选框', value: 'checkbox' },
  { label: '下拉菜单', value: 'radio' }
]

const formData = ref<Record<string, any>>({
  email: '',
  name: '',
  checkbox: [false, false, false],
  radio: ''
})
watch(
  () => formData,
  (val) => {
    console.log(val.value)
  },
  { deep: true }
)
</script>

<template>
  <div class="relative z-10 flex-shrink-0 w-full px-5 shadow h-14">
    <div>Header</div>
  </div>
  <div class="flex-1 max-h-[calc(100vh-56px)] grid grid-cols-[228px,1fr,228px]">
    <div class="px-4 py-5">
      <div class="grid grid-cols-2 gap-3">
        <FormThumbnail
          v-for="(component, index) in components"
          :key="index"
          :form-type="component.value"
        ></FormThumbnail>
      </div>
    </div>
    <div class="p-5 overflow-y-auto border-x border-gray-200 bg-[#f8f9fd] custom-scrollbar">
      <FormCard v-model="formData" />
    </div>
    <div class="px-4 py-5">1</div>
  </div>
</template>
