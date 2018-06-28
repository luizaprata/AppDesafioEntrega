import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StatusBar, KeyboardAvoidingView, Text, View } from 'react-native'
import Container from '../components/Container/Container'
import { getInitialDeliveries } from '../actions/deliveries'
import { connectAlert } from '../components/Alert'

class Home extends Component<{dispatch:any, alertWithType:any, error:any}> {
  static propTypes = {
    deliveries: PropTypes.any,
    dispatch: PropTypes.func,
    error: PropTypes.string,
    alertWithType: PropTypes.func,
  }

  componentWillMount() {
    this.props.dispatch(getInitialDeliveries())
  }

  componentWillReceiveProps(nextProps:any) {
    console.log('componentWillReceiveProps', nextProps, nextProps.error)
    if (nextProps.error && !this.props.error) {
      this.props.alertWithType('error', 'Error', nextProps.error)
    }
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <View>
            <Text>dssdsd</Text>
          </View>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => {
  const deliveries = state.deliveries
  return {
    deliveries,
    error: deliveries.error,
  }
}

export default connect(mapStateToProps)(connectAlert(Home))
