import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/EvilIcons'

import * as Animatable from 'react-native-animatable'
import Collapsible from 'react-native-collapsible'
import Accordion from 'react-native-collapsible/Accordion'

import styles from '../styles/accordion'

class ExampleView extends Component {
  static navigationOptions = {
    tabBarLabel: 'Selection',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'eye'}
        size={45}
        style={{ color: tintColor }}
      />
    )
  }

  state = {
    activeSection: false,
    collapsed: true,
  }

  setSection(section) {
    this.setState({ activeSection: section })
  }

  renderHeader(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    )
  }

  setPrayer() {
    Alert.alert('wooo!')
  }

  renderContent(section, i, isActive) {
    return (
      <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <TouchableHighlight onPress={() => {Alert.alert('wooo')}}>
          <View>
            <Text>
              {section.content}
            </Text>
          </View>
        </TouchableHighlight>
      </Animatable.View>
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <Accordion
          activeSection={this.state.activeSection}
          sections={this.props.prayers}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          duration={400}
          onChange={this.setSection.bind(this)}
        />

      </View>
    )
  }
}

const mapStateToProps = state => {
  return { prayers: state.prayers };
};

export default connect(mapStateToProps)(ExampleView)