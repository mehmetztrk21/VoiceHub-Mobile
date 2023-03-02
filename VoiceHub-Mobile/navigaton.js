import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import Login from './screens/otherScreens/login';
import Register from './screens/otherScreens/register';
import ForgotPassword from './screens/otherScreens/forgotPassword';
import Profile from './screens/profile';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false
}

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={screenOptions}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default SignedInStack