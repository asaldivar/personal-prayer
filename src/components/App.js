import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements'

export default class PersonalPrayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        <FormLabel>Password</FormLabel>
        <FormInput/>
        <Button
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
