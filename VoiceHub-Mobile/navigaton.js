import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ActivityScreen from "./screens/activity";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import SearchScreen from "./screens/search";

import EditProfile from "./screens/editProfile";
import FollowFollower from "./screens/follow&follower";
import ForgotPassword from "./screens/forgotPassword";
import Login from "./screens/login";
import Message from "./screens/message";
import OtherComments from "./screens/otherComments";
import Register from "./screens/register";
import SavedArchived from "./screens/saved&archives";
import SeePost from "./screens/seePost";
import UserMessage from "./screens/userMessage";
import Upload from "./screens/upload";
import SeeLikes from "./screens/seeLikes";
import SeeProfile from "./screens/seeProfile";
import Options from "./screens/options";
import { UserProvider } from "./utils/userContext";
import ChangePassword from "./screens/changePassword";
import Blockeds from "./screens/blockeds";
import BottomTabs from "./screens/components/BottomTabs";
import { notBottomTabScreens } from "./utils/notBottomTabScreens";

const SignedInStack = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false
  }

  const [currentRoute, setCurrentRoute] = React.useState("");

  const handleNavigationStateChange = (state) => {
    if (state && state.routes && state.routes.length > 0) {
      setCurrentRoute(state.routes[state.index].name);
    }
  };

  return (
    <NavigationContainer onStateChange={handleNavigationStateChange}>
      <UserProvider>
        <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions} >
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
          <Stack.Screen name="Blockeds" component={Blockeds} />
        </Stack.Navigator>
        {(!(notBottomTabScreens.includes(currentRoute))) ?
          <BottomTabs /> : null}
      </UserProvider>
    </NavigationContainer>
  )
}

export default SignedInStack