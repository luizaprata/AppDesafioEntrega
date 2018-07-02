import React from 'react'
import { Provider } from 'react-redux'
import store from './config/store'
import { AlertProvider } from './components/Alert'
import Navigator from './config/routes'
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $primaryBlue: '#CCCCCC',
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
)
