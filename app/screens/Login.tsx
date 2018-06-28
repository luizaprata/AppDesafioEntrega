import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Container from '../components/Container/Container'
import {
  StatusBar,
  Button,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import { connect } from 'react-redux'
import { callLogin } from '../actions/login'
import { connectAlert } from '../components/Alert'


class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  }

  onHandleLogin() {
    console.log(callLogin)
    this.props.dispatch(callLogin({}))
    //this.props.navigation.navigate('Home')
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps, nextProps.error)
    if (nextProps.error && !this.props.error) {
      this.props.alertWithType('error', 'Error', nextProps.error)
    }
  }

  render() {
    return (
      <Container>
        <View>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <KeyboardAvoidingView behavior="padding">
            <TextInput underlineColorAndroid="transparent" />
            <TextInput
              underlineColorAndroid="transparent"
              keyboardType="visible-password"
              style={{ backgroundColor: '#FFF' }}
            />
            <Button
              title="+"
              accessibilityLabel="increment"
              onPress={this.onHandleLogin.bind(this)}
              color="blue"
            />
          </KeyboardAvoidingView>
        </View>
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => {
  const login = state.login
  return {
    login,
    error: login.error,
  }
}

export default connect(mapStateToProps)(connectAlert(Login))
