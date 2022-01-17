import ReactDOM from 'react-dom'
import './styles/base.css'
import './styles/index.css'
import App from './App'

// 导入 Provider 组件用来提供数据
import { Provider } from 'react-redux'

// 导入 store
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'))
