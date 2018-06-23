import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { StatusBar, KeyboardAvoidingView, Text, View } from "react-native";
import Container from "../components/container/Container";
import { getInitialDeliveries } from "../actions/deliveries";
import { connectAlert } from "../components/Alert";
import { MapContainer } from '../components/MapContainer';

class Home extends Component {
  static propTypes = {
    deliveries: PropTypes.any,
    dispatch: PropTypes.func,
    error: PropTypes.string,
    alertWithType: PropTypes.func
  };

  componentWillMount() {
    this.props.dispatch(getInitialDeliveries());
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps, nextProps.error);
    if (nextProps.error && !this.props.error) {
      this.props.alertWithType("error", "Error", nextProps.error);
    }
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <MapContainer />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  const deliveries = state.deliveries;
  return {
    deliveries,
    error: deliveries.error
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
