import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StatusBar, View, Text } from 'react-native'
import { Container } from '../components/Container'
import { getInitialDeliveries } from '../actions/deliveries'
import { connectAlert } from '../components/Alert'
import { Header } from '../components/Header'

class Home extends Component {
  static propTypes = {
    deliveries: PropTypes.any,
    dispatch: PropTypes.func,
    error: PropTypes.any,
    alertWithType: PropTypes.func,
    navigation: PropTypes.object,
  }

  componentWillMount() {
    this.props.dispatch(getInitialDeliveries())
  }

  componentWillReceiveProps(nextProps: any) {
    console.log('componentWillReceiveProps', nextProps, nextProps.error)
    if (nextProps.error && !this.props.error) {
      this.props.alertWithType('error', 'Error', nextProps.error)
    }
  }

  handleOptionsPress = () => {
    console.log('????')
    this.props.navigation.navigate('Options');
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <View>
          <Text>poooo</Text>
        </View>
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
