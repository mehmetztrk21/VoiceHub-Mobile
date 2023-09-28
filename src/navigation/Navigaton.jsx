import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Notifications from "../screens/Notifications";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import SearchScreen from "../screens/Search";
import EditProfile from "../screens/EditProfile";
import FollowFollower from "../screens/FollowFollower";
import ForgotPassword from "../screens/ForgotPassword";
import Login from "../screens/Login";
import Message from "../screens/Message";
import OtherComments from "../screens/OtherComments";
import Register from "../screens/Register";
import SavedArchived from "../screens/SavedArchives";
import SeePost from "../screens/SeePost";
import UserMessage from "../screens/UserMessage";
import Upload from "../screens/Upload";
import SeeLikes from "../screens/SeeLikes";
import SeeProfile from "../screens/SeeProfile";
import Options from "../screens/Options";
import ChangePassword from "../screens/ChangePassword";
import Blockeds from "../screens/Blockeds";

import BottomTabs from "../components/BottomTabs";

import { notBottomTabScreens } from "../utils/notBottomTabScreens";
import { UserProvider } from "../utils/userContext";

const Navigation = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false
  }

  const [currentRoute, setCurrentRoute] = React.useState("Login");

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
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="Upload" component={Upload} />
          <Stack.Screen name="Notifications" component={Notifications} />
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

export default Navigation