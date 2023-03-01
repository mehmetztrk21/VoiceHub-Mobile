import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import user1 from "../assets/images/userImages/user1.jpg"

import BottomTabs from '../components/BottomTabs'
import UserPostData from "../components/UserPostData"
import Post from "../components/Post"
import HomeHeader from '../components/HomeHeader'

const home = ({navigation}) => {
  return (
    <SafeAreaView>
      
      <HomeHeader navigation={navigation}/>

      <ScrollView>
        { UserPostData.map((item)=>{
            return(
                <Post navigation={navigation} />
            )
        })}
      </ScrollView>

      <BottomTabs navigation={navigation} pageName={"Home"}/>
    </SafeAreaView>
  )
}

export default home