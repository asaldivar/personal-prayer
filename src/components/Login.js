import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements'
import firebase from 'firebase'

import Navigation from './Navigation'

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onButtonPress() {
    const { email, password } = this.state
    Alert.alert('wooo!')
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess.bind(this))
  }

  onAuthSuccess() {
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Email</FormLabel>
        <FormInput
          onTextChange={email => {this.setState({ email })}}
          value={this.state.email}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onTextChange={password => {this.setState({ password })}}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Button
          onPress={this.onButtonPress}
          style={styles.button}
          title='LOGIN'
        />
        <Button
          style={styles.button}
          title='CREATE PROFILE'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    marginTop: 10
  }
})
