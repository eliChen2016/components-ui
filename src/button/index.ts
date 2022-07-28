// 以插件或者单个组件的形式 向外暴露
import { App } from "vue"
import Button from "./src/Button"

// 具名导出
export { Button }

// 导出插件
export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}

