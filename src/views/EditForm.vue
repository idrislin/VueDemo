<script setup lang="ts">
import FormCard from '@/components/EditForm/FormCard.vue'
import { type FormModel } from '@/models/Form'
import { watch, ref } from 'vue'
const formData = ref<FormModel>({
  title: '',
  describe: '',
  titleImage: '',
  formConfig: []
})

watch(
  () => formData,
  (wv) => {
    console.log(wv.value.title)
  },
  { deep: true }
)
</script>

<template>
  <div class="relative z-10 flex-shrink-0 w-full px-5 shadow h-14">
    <div>Header</div>
  </div>
  <div class="flex-1 max-h-[calc(100vh-56px)] grid grid-cols-[228px,1fr,228px]">
    <div class="px-4 py-5">left banner</div>
    <div class="p-5 overflow-y-auto border-x border-gray-200 bg-[#f8f9fd] custom-scrollbar">
      <FormCard v-model="formData" />
    </div>
    <div class="px-4 py-5">right banner</div>
  </div>
</template>
