<template>
  <div>
    <label class="text-base font-semibold text-gray-900">{{ label }}</label>
    <p class="text-sm text-gray-500">{{ describe }}</p>
    <fieldset class="mt-4">
      <legend class="sr-only">Notification method</legend>
      <div class="space-y-4">
        <div v-for="option in options" :key="option.id" class="flex items-center">
          <input
            :id="option.id"
            name="notification-method"
            type="radio"
            :checked="false"
            @change="handleChange(option.id)"
            class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
          />
          <label :for="option.id" class="block ml-3 text-sm font-medium leading-6 text-gray-900">{{
            option.label
          }}</label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import type { FormConfig } from '@/models/Form'

const value = defineModel<string>({ required: true })
const { data } = defineProps<{ data: FormConfig }>()
const { options, label, describe } = data
const handleChange = (id: string) => {
  value.value = id
}
</script>
