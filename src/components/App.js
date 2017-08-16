import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../reducers/PrayerReducer'
// import firebase from 'firebase'

import Navigation from './Navigation'
import Login from './Login'

const store = createStore(reducers)

export default class PersonalPrayer extends Component {
  state = {
    loggedIn: null
  }

  componentWillMount() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyARhPO_VkoCgYh0JzRfiJhmzi-MjJJRMVU",
    //   authDomain: "personalprayer-bf55d.firebaseapp.com",
    //   databaseURL: "https://personalprayer-bf55d.firebaseio.com",
    //   projectId: "personalprayer-bf55d",
    //   storageBucket: "personalprayer-bf55d.appspot.com",
    //   messagingSenderId: "61671107412"
    // })

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ loggedIn: true })
    //   } else {
    //     this.setState({ loggedIn: false })
    //   }
    // })
  }

  renderInitialView() {
    switch(this.state.loggedIn) {
      case true:
        return <Navigation/>
      case false:
        return <Login/>
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation/>
        </View>
      </Provider>
    )
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
