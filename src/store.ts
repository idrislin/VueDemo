import { type FormConfig, type FormType } from './models/Form'
import { defineStore } from 'pinia'

export const useFormConfigsStore = defineStore('formConfigs', {
  state: () => {
    const configs: FormConfig[] = [
      {
        id: 'd4a075a0-138f-4d2a-8eed-3cfbad2ffbe5',
        formType: 'text',
        label: 'Email',
        key: 'email'
      },
      {
        id: '45837a4d-dcfc-4b59-8fd9-7105e347ac60',
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
        id: '3aa91e3d-57eb-4081-bb78-8e3ccb231f6c',
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
        id: '2a41b024-2ef8-4181-9db0-3d7b7bdc1244',
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
    const components: { label: string; value: FormType }[] = [
      { label: '输入框', value: 'text' },
      { label: '单选', value: 'selector' },
      { label: '复选框', value: 'checkbox' },
      { label: '下拉菜单', value: 'radio' }
    ]
    return { configs, components }
  },
  getters: {
    formComponents: (state) => {
      return state.components
    },
    componentsByConfig: (state) => {
      return (id: string) => {
        const cfg = state.configs.find((config) => config.id === id)
        return state.components.find((item) => item.value === cfg?.formType)
      }
    },
    formConfigs(state) {
      return state.configs
    },
    formConfig: (state) => {
      return (index: number) => state.configs[index]
    },
    formConfigById: (state) => {
      return (id: string) => state.configs.find((config) => config.id === id)
    }
  },
  actions: {
    pushConfig(value: FormConfig) {
      this.configs.push(value)
    },
    popConfig() {
      this.configs.pop()
    },
    spliceConfig(index: number, num: number, value?: FormConfig) {
      if (value) this.configs.splice(index, num, value)
      else this.configs.splice(index, num)
    }
  }
})
