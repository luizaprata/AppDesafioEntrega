import React from 'react'
import { Provider } from 'react-redux'
import store from './config/store'
import { AlertProvider } from './components/Alert'
import Navigator from './config/routes'

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
)
