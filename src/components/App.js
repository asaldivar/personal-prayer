import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/PrayerReducer'
import firebase from 'firebase'
import Thunk from 'redux-thunk';

import Navigation from './Navigation'
import Login from './Login'

const store = createStore(reducers, applyMiddleware(Thunk))

export default class PersonalPrayer extends Component {
  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyABcNHCrK82BlC7pytDTAJ8H6sjfRv_SvI",
      authDomain: "prayer-app-bd9a8.firebaseapp.com",
      databaseURL: "https://prayer-app-bd9a8.firebaseio.com",
      projectId: "prayer-app-bd9a8",
      storageBucket: "prayer-app-bd9a8.appspot.com",
      messagingSenderId: "1063452317919"
    })
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
