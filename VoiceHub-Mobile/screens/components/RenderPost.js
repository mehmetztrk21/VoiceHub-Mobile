import { StyleSheet, View } from 'react-native'
import React from 'react'

import userPostData from "./userPostData";

import PostUserInfo from "./postUserInfo";
import Post from "./post";
import PostActions from "./postActions";
import colors from '../../assets/colors';

const RenderPost = ({navigation, HeaderTitle, setOpenEditPostPopUp, setOpenArchivePopUp}) => {

    return userPostData.map((item) => (
        <View style={[styles.container]}>

          <PostUserInfo 
          navigation={navigation} userPic={item.userPic} 
          userName={item.userName} HeaderTitle={HeaderTitle}
          setOpenArchivePopUp={setOpenArchivePopUp}
          setOpenEditPostPopUp={setOpenEditPostPopUp}
          visible={item.visible}/>

          <View style={{ paddingLeft: '20%', paddingRight: '2.5%' }}>
            <Post/>
          </View>

          <PostActions navigation={navigation}/>

        </View>
      ));
}

const styles = StyleSheet.create({
  container:{
    width:"90%",
    backgroundColor:colors.white,
    marginHorizontal:"5%",
    shadowColor: '#333333',
    shadowOffset: {
      width: 0,
      height: 2,
      
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius:20,
    marginVertical: 10,

  },
})

export default RenderPost