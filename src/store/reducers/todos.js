import * as types from '../actionTypes/todos'

// 默认值
const initialState = [
  { id: 1, text: '吃饭', done: true },
  { id: 2, text: '学习', done: false },
  { id: 3, text: '睡觉', done: true }
]

const todos = (state = initialState, action) => {
  switch (action.type) {
    // 删除任务
    case types.DEL_TODO:
      return state.filter(item => item.id !== action.payload)

    // 切换任务
    case types.TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done
          }
        }
        return item
      })

    // 添加任务
    case types.ADD_TODO:
      // const id = state.length === 0 ? 1 : state[state.length - 1].id + 1
      // 获取所有任务的 ID
      let ids = state.map(item => {
        return item.id
      })
      // 计算所有任务 ID 的最大值
      let maxId = Math.max.apply(null, ids) + 1

      return [
        ...state,
        {
          id: maxId,
          text: action.payload,
          done: false
        }
      ]

    // 全选全不选
    case types.TOGGLE_ALL:
      return state.map(item => ({ ...item, done: action.payload }))

    // 清空已完成
    case types.CLEAR_DONE:
      return state.filter(item => !item.done)

    // 修改任务名称
    case types.UPDATE_TODO:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.text
          }
        }
        return item
      })

    default:
      return state
  }
}

export default todos
