<template>
  <fieldset>
    <legend class="sr-only">Notifications</legend>
    <div class="space-y-5">
      <div v-for="(option, index) in options" :key="index" class="relative flex items-start">
        <div class="flex items-center h-6">
          <input
            :id="option.id"
            :name="option.label"
            type="checkbox"
            @change="handleChange(option.id, $event)"
            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
          />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label :for="option.id" class="font-medium text-gray-900">{{ option.label }}</label>
          <p :id="`${option.id}-describe`" class="text-gray-500">
            {{ option.describe }}
          </p>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormConfig } from '@/models/Form'

const value = defineModel<boolean[]>({ required: true })
const { data } = defineProps<{ data: FormConfig }>()
const { options } = data
const handleChange = (id: string, event: Event) => {
  console.log(id)
  const target = event.target as HTMLInputElement
  console.log(target.checked)
}
</script>
