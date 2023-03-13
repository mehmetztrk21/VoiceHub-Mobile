import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { Dimensions } from "react-native";
import colors from '../../assets/colors';
import Post from "../../screens/components/post";

const { width } = Dimensions.get('window');

export default function UserMessageItem({ navigation, userName, userPic, who }) {

  return (
    <View style={{ flexDirection: 'row' }}>

      {who=='receiver'?(
        <TouchableOpacity
          onPress={() => navigation.navigate('SeeProfile', { uName: userName })}>
          <Image source={userPic}
            style={{ width: width * 0.125, height: width * 0.125, borderRadius: width * 0.0675 }} />
        </TouchableOpacity>
      ):null}

      <View style={[{
        width: width * 0.5, paddingLeft: width * 0.03,
        backgroundColor: colors.white, borderRadius: width * 0.0625, marginLeft: width * 0.03
      },who=='sender'?{marginLeft:width*0.44}:null]}>
        <Post />
      </View>
      
    </View>
  );
}