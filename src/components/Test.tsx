// 1.函数式组件
// export default () => <div>welcome to function component</div>

// 2.defineComponent
import { defineComponent, withModifiers, ref } from 'vue'
// export default defineComponent({
//   render() {
//     return <div>welcome to Test.tsx</div>
//   }
// })

/**
 * 3.defineComponent({ setup() {} })
 * 摒弃this，对于ts支持最好
 * 借助babel-plugin-jsx
 * vue独特概念：修饰符、slot、directive、emit
 * 修饰符：使用高阶函数对方法
 */
export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  // ctx: { attrs, emit, expose, slots } 
  emits: ['click'],
  setup(props, { slots, emit }) {
    // 业务逻辑
    const counter = ref(0)
    const inc = () => {
      counter.value++
      emit('click')
    }
    const condition = Math.random() > 0.5 ? true : false

    const list = ref<string[]>(['a', 'b', 'c', 'd'])

    // 返回函数
    return () => {
      // 视图逻辑
      const span = true ? <span>A</span> : <span>B</span>
      return (
        <span onClick={withModifiers(inc, ['self'])}>
          <br/>
          test: {counter.value}
          <input type="text" v-model={counter.value} v-focus/>
          <div>jsx中的v-if</div>
          <div>{condition ? <span>A</span> : <span>B</span>}</div>
          <div>{ span }</div>
          <div>jsx中的v-for</div>
          <ul>
            {
              list.value.map((item, index) => <li key={index}>{item}</li>)
            }
          </ul>
          <div>默认插槽内容</div>
          <div>{ slots.default? slots.default(): 'default content' }</div>
          <div>{ slots.title? slots.title(): 'title content' }</div>
        </span>
      )
    }
  }
})
