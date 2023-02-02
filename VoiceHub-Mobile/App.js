import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './pages/LoginScreen';
import MainScreen from './pages/MainScreen';
import ForgotMyPassword from './pages/ForgotMyPassword';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ForgotMyPassword" component={ForgotMyPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;