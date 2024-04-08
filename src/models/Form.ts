export type FormType = 'text' | 'textarea' | 'image' | 'selector' | 'radio' | 'checkbox'

export interface FormConfig {
  id: string
  formType: FormType
  describe?: string
  options?: Record<string, any>[]
  label: string
  labelHidden?: boolean
  errorMsg?: string
  disabled?: boolean
  placeholder?: string
  key: string
  multiple?: boolean
}

export interface FormModel {
  title: string
  describe: string
  titleImage: string
  formConfig: FormConfig[]
}
