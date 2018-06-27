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

class Login extends Component {
  onHandleLogin() {
    this.props.navigation.navigate('Home')
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
              title="Enviar"
              accessibilityLabel="increment"
              onPress={this.onHandleLogin.bind(this)}
              color="blue"
            />
          </KeyboardAvoidingView>
        </View>
      </Container>
    )
  }

  static propTypes = {
    navigation: PropTypes.object,
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Login)
