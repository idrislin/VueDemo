<script setup lang="ts">
import FormCard from '@/components/EditForm/FormCard.vue'
import { type FormModel } from '@/models/Form'
import { ref, watch } from 'vue'
import IconRadio from '@/components/icons/IconRadio.vue'
import IconTextfield from '@/components/icons/IconTextfield.vue'
import IconCheckbox from '@/components/icons/IconCheckbox.vue'
import IconSelect from '@/components/icons/IconSelect.vue'
const configs: FormModel = {
  title: '',
  describe: '',
  titleImage: '',
  formConfig: [
    { formType: 'text', label: 'Email', key: 'email' },
    {
      formType: 'radio',
      label: '单选',
      key: 'radio',
      options: [
        { id: 'email', label: 'Email' },
        { id: 'sms', label: 'Phone (SMS)' },
        { id: 'push', label: 'Push notification' }
      ]
    },
    {
      formType: 'checkbox',
      label: '多选',
      key: 'checkbox',
      options: [
        {
          id: 'comments',
          label: 'Comments',
          describe: 'Get notified when someones posts a comment on a posting.'
        },
        {
          id: 'candidates',
          label: 'Candidates',
          describe: 'Get notified when a candidate applies for a job.'
        },
        {
          id: 'offers',
          label: 'Offers',
          describe: 'Get notified when a candidate accepts or rejects an offer.'
        }
      ]
    },
    {
      key: 'name',
      formType: 'selector',
      label: 'Select',
      options: [
        { id: 1, name: 'Wade Cooper' },
        { id: 2, name: 'Arlene Mccoy' },
        { id: 3, name: 'Devon Webb' },
        { id: 4, name: 'Tom Cook' },
        { id: 5, name: 'Tanya Fox' },
        { id: 6, name: 'Hellen Schmidt' },
        { id: 7, name: 'Caroline Schultz' },
        { id: 8, name: 'Mason Heaney' },
        { id: 9, name: 'Claudie Smitham' },
        { id: 10, name: 'Emil Schaefer' }
      ]
    }
  ]
}

const components = [
  { label: '输入框', value: 'text', icon: IconTextfield },
  { label: '单选', value: 'radio', icon: IconRadio },
  { label: '复选框', value: 'radio', icon: IconCheckbox },
  { label: '下拉菜单', value: 'radio', icon: IconSelect }
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
        <button
          class="flex items-center justify-start gap-1 px-2 text-xs bg-blue-100 rounded h-9 hover:bg-blue-200"
          v-for="component in components"
          :key="component.label"
        >
          <component :is="component.icon" class="w-4 h-4 text-blue-500" />
          {{ component.label }}
        </button>
      </div>
    </div>
    <div class="p-5 overflow-y-auto border-x border-gray-200 bg-[#f8f9fd] custom-scrollbar">
      <FormCard v-model="formData" :configs="configs" />
    </div>
    <div class="px-4 py-5">right banner</div>
  </div>
</template>
