import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Login from '../screens/Login'

export default StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Login"
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
        header: () => null
      }
    }
  },
  {
    headerMode: "screen"
  }
)


