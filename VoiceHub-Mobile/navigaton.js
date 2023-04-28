import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ActivityScreen from "./screens/activity";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import SearchScreen from "./screens/search";

import EditProfile from "./screens/otherScreens/editProfile";
import FollowFollower from "./screens/otherScreens/follow&follower";
import ForgotPassword from "./screens/otherScreens/forgotPassword";
import Login from "./screens/otherScreens/login";
import Message from "./screens/otherScreens/message";
import OtherComments from "./screens/otherScreens/otherComments";
import Register from "./screens/otherScreens/register";
import SavedArchived from "./screens/otherScreens/saved&archives";
import SeePost from "./screens/otherScreens/seePost";
import UserMessage from "./screens/otherScreens/userMessage";
import Upload from "./screens/otherScreens/upload";
import SeeLikes from "./screens/otherScreens/seeLikes";
import SeeProfile from "./screens/otherScreens/seeProfile";
import Options from "./screens/otherScreens/options";
import { UserProvider } from "./utils/userContext";
import ChangePassword from "./screens/otherScreens/changePassword";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false
}

const SignedInStack = () => (
  <NavigationContainer>
    <UserProvider>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />

        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="OtherComments" component={OtherComments} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SavedArchived" component={SavedArchived} />
        <Stack.Screen name="SeePost" component={SeePost} />
        <Stack.Screen name="UserMessage" component={UserMessage} />
        <Stack.Screen name="FollowFollower" component={FollowFollower} />
        <Stack.Screen name="SeeLikes" component={SeeLikes} />
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="SeeProfile" component={SeeProfile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </UserProvider>
  </NavigationContainer>
)

export default SignedInStack