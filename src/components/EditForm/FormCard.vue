<template>
  <div class="card flex flex-col h-[2000px]">
    <div class="flex items-center justify-center w-full py-5 border-b cursor-pointer">
      <p>表头图片</p>
    </div>
    <div class="px-8">
      <FormComponent
        v-for="(item, index) in configs.formConfig"
        :key="index"
        :item="item"
        v-model="formData[item.key]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type FormModel } from '@/models/Form'
import FormComponent from './FormComponent.vue'
const { configs } = defineProps<{ configs: FormModel }>()
const formData = defineModel<{ [key: string]: any }>({ required: true })
</script>
