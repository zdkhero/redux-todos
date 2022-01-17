import { createStore } from 'redux'

// 导入 根 reducer
import rootReducer from './reducers'

// 创建 store
const store = createStore(rootReducer)

export default store
