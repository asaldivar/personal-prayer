import { TabNavigator } from 'react-navigation'

import Login from './Login'
import PrayerSelection from './PrayerSelection'
import PrayerEvent from './PrayerEvent'
import PrayerInfo from './PrayerInfo'

const Navigation = TabNavigator({
  Login: { screen: Login },
  PrayerSelection: { screen: PrayerSelection },
  PrayerEvent: { screen: PrayerEvent },
  PrayerInfo: { screen: PrayerInfo }
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#80cbc4',
    swipeEnabled: true,
    showLabel: false,
    style: {
      backgroundColor: '#26a69a'
    }
  }
})

export default Navigation