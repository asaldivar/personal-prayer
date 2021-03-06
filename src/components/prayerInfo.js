import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/EvilIcons'

export default class PrayerInfo extends Component {
  static navigationOptions = {
    tabBarLabel: 'Companies',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'eye'}
        size={45}
        style={{ color: tintColor }}
      />
    )
  }

  render() {
    return (
    	<View style={styles.container}>
	      <Text>
					PrayerInfo
	      </Text>
	     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
