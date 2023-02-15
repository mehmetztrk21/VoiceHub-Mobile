import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';
import ActivityScreen from './screens/activity';
import SearchScreen from './screens/search';

import EditProfile from './screens/otherScreens/editProfile';
import ForgotPassword from './screens/otherScreens/forgotPassword';
import Login from './screens/otherScreens/login';
import Message from './screens/otherScreens/message';
import OtherComments from './screens/otherScreens/otherComments';
import Register from './screens/otherScreens/register';
import Saved from './screens/otherScreens/saved';
import SeePost from './screens/otherScreens/seePost';
import SeeProfile from './screens/otherScreens/seeProfile';
import Upload from './screens/otherScreens/upload';
import UserMessage from './screens/otherScreens/userMessage';
import Followers from './screens/otherScreens/followers';
import Follows from './screens/otherScreens/follows';


const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false
}

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={screenOptions}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='ActivityScreen' component={ActivityScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />

      <Stack.Screen name='EditProfile' component={EditProfile} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Message' component={Message} />
      <Stack.Screen name='OtherComments' component={OtherComments} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Saved' component={Saved} />
      <Stack.Screen name='SeePost' component={SeePost} />
      <Stack.Screen name='SeeProfile' component={SeeProfile} />
      <Stack.Screen name='Upload' component={Upload} />
      <Stack.Screen name='UserMessage' component={UserMessage} />
      <Stack.Screen name='Followers' component={Followers} />
      <Stack.Screen name='Follows' component={Follows} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default SignedInStack