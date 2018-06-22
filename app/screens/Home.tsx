import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView, Text, View } from "react-native";
import Container from "../components/container/Container";

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <View>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
