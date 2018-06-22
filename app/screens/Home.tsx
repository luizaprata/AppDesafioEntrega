import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { StatusBar, KeyboardAvoidingView, Text, View } from "react-native";
import Container from "../components/container/Container";
import { getInitialDeliveries } from "../actions/drivers";

class Home extends Component {
  static propTypes = {
    deliveries: PropTypes.any,
    dispatch: PropTypes.func
  };

  componentWillMount() {
    this.props.dispatch(getInitialDeliveries());
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <View />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    deliveries: state
  };
};

export default connect(mapStateToProps)(Home);
