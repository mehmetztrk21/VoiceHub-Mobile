import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../home';
import SearchScreen from '../search';
import ActivityScreen from '../activity';
import ProfileScreen from '../profile';

const BottomTabs = (navigation) => {
    const { Screen, Navigator } = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name='Home' component={HomeScreen} options={{
          tabBarIcon: ({ tintColor }) =>
            <Icon style={[{ color: tintColor, }]} size={25} name={'home'} />
        }} />
        <Screen name='Search' component={SearchScreen} options={{
          tabBarIcon: ({ tintColor }) =>
            <Icon style={[{ color: tintColor }]} size={25} name={'search'} />
        }} />
        <Screen name='Activity' component={ActivityScreen} options={{
          tabBarIcon: ({ tintColor }) =>
            <Icon style={[{ color: tintColor }]} size={25} name={'heart'} />
        }} />
        <Screen name='Profile' component={ProfileScreen} options={{
          tabBarIcon: ({ tintColor }) =>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
        }} />
      </Navigator>
    </NavigationContainer>
  );
}
const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      height: "6.5%",
    }
}
export default BottomTabs;