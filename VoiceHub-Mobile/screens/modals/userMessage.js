import React from 'react';
import { View, Text, ScrollView, Image} from 'react-native';

import userMessageStyle from "../../assets/styles/userMessage.style";

import user1 from "../../assets/userImages/user1.jpg";

import UserMessageItem from "../../screens/components/userMessageItem";

export default class UserMessageScreen extends React.Component {
    render() {
      //const [userMessagePage,setUserMessagePage]=useState(false);
      return (
        <View style={userMessageStyle.container}>
            <Image source={user1} style={userMessageStyle.ProfilePhoto}/>
          <Text style={userMessageStyle.uName}>user name</Text>
          <ScrollView style={userMessageStyle.scroll}>
            {/* map kullanacagim */}
                <UserMessageItem/>
          </ScrollView>
        </View>
      );
    }
  } 