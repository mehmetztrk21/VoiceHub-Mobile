import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/Ionicons';

//pages
import HomeScreen from "./screens/home";
import SearchScreen from "./screens/search";
import ActivityScreen from "./screens/activity";
import ProfileScreen from "./screens/profile";

const { Screen, Navigator } = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name='Home' component={HomeScreen} options={{
          tabBarIcon: ({ tintColor }) => 
          <Icon style={[{ color: tintColor,  }]} size={25} name={'home'} />
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
    height: "7.5%",
  }
};

export default App;