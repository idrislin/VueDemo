<script setup lang="ts">
import { type FormModel } from '@/models/Form'
import TextField from '@/components/common/TextField.vue'
const formData = defineModel<FormModel>({ required: true })
</script>

<template>
  <div class="card flex flex-col h-[2000px]">
    <div class="flex items-center justify-center w-full py-5 border-b cursor-pointer">
      <p>表头图片</p>
    </div>
    <div class="px-8">
      <TextField v-model="formData.title" label="email" />
    </div>
  </div>
</template>
