import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Options from '../screens/Options'
import Login from '../screens/Login'
import { StatusBar } from "react-native";


const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Entregadores',
      },
    },
  },
  {
    headerMode: 'screen',
  },
)

const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
})

export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    },
    CurrencyList: {
      screen: LoginStack
    }
  },
  {
    headerMode: "none"
  },
)
