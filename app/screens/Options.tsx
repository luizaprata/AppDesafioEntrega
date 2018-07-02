import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ScrollView, StatusBar, Linking } from 'react-native'
import { connectAlert } from '../components/Alert'

class Options extends Component {
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
      </ScrollView>
    )
  }
}
export default connectAlert(Options)
