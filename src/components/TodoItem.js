import { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
// 导入 useDispatch 分发 action
import { useDispatch } from 'react-redux'
// 导入 action-creator
import { delTodo, toggleTodo, updateTodo } from '../store/actions/todos'
import { keyboard } from '@testing-library/user-event/dist/keyboard'

export const TodoItem = ({ id, text, done }) => {
  // 创建 dispatch
  const dispatch = useDispatch()

  // 新增状态控制编辑框的隐藏和展示
  const [showEdit, setShowEdit] = useState(false)

  // 保存当前编辑项的任务名称
  const [todoName, setTodoName] = useState(text)

  // 创建 ref
  const inputRef = useRef(null)

  // 监听
  useEffect(() => {
    if (showEdit) {
      inputRef.current.focus()
    }
  }, [showEdit])

  // 失去焦点时
  const onBlur = () => {
    if (todoName.trim() === '') return

    dispatch(updateTodo(id, todoName))

    setShowEdit(false)
  }

  // 编辑完回车
  const onUpdateTodo = e => {
    if (e.keyCode !== 13) return
    if (todoName.trim() === '') return

    dispatch(updateTodo(id, todoName))

    setShowEdit(false)
  }


  return (
    // 编辑时，添加类名：editing
    <li className={classNames({ completed: done, editing: showEdit })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={done}
          onChange={() => dispatch(toggleTodo(id))}
        />
        <label onDoubleClick={() => setShowEdit(true)}>{text}</label>
        <button className="destroy" onClick={() => dispatch(delTodo(id))}></button>
      </div>
      <input
        className="edit"
        ref={inputRef}
        onBlur={onBlur}
        value={todoName}
        onChange={e => setTodoName(e.target.value)}
        onKeyDown={onUpdateTodo}
      />
    </li>
  )
}
