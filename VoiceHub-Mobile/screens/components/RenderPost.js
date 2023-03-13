import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import userPostData from "./userPostData";

import colors from '../../assets/colors';
import Post from "./post";
import PostActions from "./postActions";
import PostUserInfo from "./postUserInfo";

const user = JSON.parse(localStorage.getItem("user"));
const username = user.username;

const RenderPost = ({ navigation, HeaderTitle, setOpenEditPostPopUp, setOpenArchivePopUp }) => {

  return userPostData.map((item) => (
    <View style={[styles.container]}>

      <PostUserInfo
        navigation={navigation} userPic={item.userPic}
        userName={item.userName} HeaderTitle={HeaderTitle}
        setOpenArchivePopUp={setOpenArchivePopUp}
        setOpenEditPostPopUp={setOpenEditPostPopUp}
        visible={item.visible} />

      {/* Categories */}
      <View style={{ flexDirection: 'row', marginLeft: '5%' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', { uName: username })}>
          <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}>#poem</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', { uName: username })}>
          <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}> #sports</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', { uName: username })}>
          <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}> #motivation</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingLeft: '20%', paddingRight: '2.5%' }}>
        <Post />
      </View>

      <PostActions navigation={navigation} />

    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: colors.white,
    marginHorizontal: "5%",
    shadowColor: '#333333',
    shadowOffset: {
      width: 0,
      height: 2,

    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 20,
    marginVertical: 10,

  },
})

export default RenderPost