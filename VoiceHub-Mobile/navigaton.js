import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import Login from './screens/login';
import Register from './screens/register';
import ForgotPassword from './screens/forgotPassword';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false
}

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={screenOptions}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default SignedInStack