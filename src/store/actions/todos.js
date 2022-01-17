// 导入创建好的 action type
import * as types from '../actionTypes/todos'

// 删除任务
export const delTodo = id => ({
  type: types.DEL_TODO,
  payload: id
})

// 切换任务的完成状态
export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  payload: id
})

// 添加任务
export const addTodo = text => ({
  type: types.ADD_TODO,
  payload: text
})

// 切换全选全不选
export const toggleAll = checked => ({
  type: types.TOGGLE_ALL,
  payload: checked
})

// 清空已完成任务
export const clearDone = () => ({
  type: types.CLEAR_DONE
})

// 更新任务
export const updateTodo = (id, text) => ({
  type: types.UPDATE_TODO,
  payload: {
    id,
    text
  }
})
