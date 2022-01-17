import { useSelector, useDispatch } from 'react-redux'
import { clearDone } from '../store/actions/todos'
import classNames from 'classnames'
import { changeFilter } from '../store/actions/filter'

export const TodoFooter = () => {
  // 获取到未完成任务数量
  const leftCount = useSelector((state) => state.todos.filter((item) => !item.done).length)
  // 获取筛选的状态
  const filter = useSelector((state) => state.filter)
  // 创建 dispatch
  const dispatch = useDispatch()

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a
            className={classNames({ selected: filter === 'all' })}
            onClick={() => dispatch(changeFilter('all'))}
            href="#/"
          >
            All
          </a>
        </li>
        <li>
          <a
            className={classNames({ selected: filter === 'active' })}
            onClick={() => dispatch(changeFilter('active'))}
            href="#/"
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={classNames({ selected: filter === 'completed' })}
            onClick={() => dispatch(changeFilter('completed'))}
            href="#/"
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => dispatch(clearDone())}>
        Clear completed
      </button>
    </footer>
  )
}
