import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/actions/todos'

export const TodoHeader = () => {
  // 创建 dispatch
  const dispatch = useDispatch()
  // 用户输入的任务
  const [text, setText] = useState('')

  // 点击回车键触发的事件
  const onAddTodo = e => {
    if (e.keyCode !== 13) return
    if (text.trim() === '') return

    // 分发添加任务的 action
    dispatch(addTodo(text))

    // 清空输入框的值
    setText('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={onAddTodo}
      />
    </header>
  )
}
