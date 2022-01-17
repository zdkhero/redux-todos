import { TodoItem } from './TodoItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleAll } from '../store/actions/todos'

export const TodoMain = () => {
  // 获取状态
  // const list = useSelector(state => state.todos)
  const list = useSelector(state => {
    // 根据任务状态，筛选出对应的任务列表数据
    if (state.filter === 'active') {
      return state.todos.filter(item => !item.done)
    } else if (state.filter === 'completed') {
      return state.todos.filter(item => item.done)
    } else {
      return state.todos
    }
  })

  // 全选与否的状态
  const checkAll = list.every(item => item.done)
  // 创建 dispatch
  const dispatch = useDispatch()

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={checkAll}
        onChange={e => dispatch(toggleAll(e.target.checked))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {
          list.map(item => (
            <TodoItem key={item.id} {...item} />
          ))
        }
      </ul>
    </section>
  )
}
