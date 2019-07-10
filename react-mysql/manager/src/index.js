import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store/index'
import './assets/css/bootstrap.css'

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))

serviceWorker.unregister()
