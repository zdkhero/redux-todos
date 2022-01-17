import { combineReducers } from 'redux'

// 导入 reducer
import todos from './todos'
import filter from './filter'

// 合并 reducer
const rootReducer = combineReducers({
  todos,
  filter
})

export default rootReducer
