export type FormType = 'text' | 'textarea' | 'image' | 'selector' | 'radio' | 'checkbox'

export interface FormConfig {
  formType: FormType
}

export interface FormModel {
  title: string
  describe: string
  titleImage: string
  formConfig: FormConfig[]
}
