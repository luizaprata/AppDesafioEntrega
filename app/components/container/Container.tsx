import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View>{children}</View>
  </TouchableWithoutFeedback>
)

Container.propTypes = {
  children: PropTypes.any,
}

export default Container
