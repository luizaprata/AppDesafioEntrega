import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Login from '../screens/Login'

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Login"
      }
  },
  {
    headerMode: 'screen',
  }
)


