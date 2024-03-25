<template>
  <div>
    <label v-if="!labelHidden" class="block text-sm font-medium leading-6 text-gray-900">{{
      label
    }}</label>
    <div class="relative mt-2 rounded-md">
      <input
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="value"
        class="block w-full outline-none px-3 rounded-md border-0 py-1.5 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <div
        v-if="errorMsg"
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      >
        <AleatCircleIcon />
      </div>
    </div>
    <p class="mt-2 text-sm text-red-600" v-if="errorMsg">{{ errorMsg }}</p>
  </div>
</template>
<script setup lang="ts">
import type { FormConfig } from '@/models/Form'
import AleatCircleIcon from '../icons/AlertCircleIcon.vue'
const value = defineModel<string>({ required: true })
const { data } = defineProps<{ data: FormConfig }>()
const { label, labelHidden, errorMsg, disabled, placeholder } = data
</script>
