import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Home from './components/screens/Home';
import Search from './components/screens/Search';
import Friends from './components/screens/Friends';
import Account from './components/screens/Account'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Search"
          component={Search}
        />
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Friends"
          component={Friends}
        />
        <Tab.Screen
          name="Account"
          component={Account}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
