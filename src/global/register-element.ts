import type { App } from 'vue'
import {
  ElButton,
  ElInput,
  ElRadio,
  ElFormItem,
  ElAlert,
  ElAside
} from 'element-plus/lib/index'

export function registerElement(app: App): void {
  const components = [ElButton, ElInput, ElRadio, ElFormItem, ElAlert, ElAside]
  for (const component of components) {
    app.component(component.name, component)
  }
}
