import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import BottomTabs from '../components/BottomTabs'
import UserPostData from "../components/UserPostData"
import Post from "../components/Post"
import HomeHeader from '../components/HomeHeader'
import colors from '../assets/colors'

const home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, }}>

      <HomeHeader navigation={navigation} />

      <ScrollView style={{ marginTop: 175, paddingHorizontal: "5%", marginBottom: 60 }}>
        {UserPostData.map(() => {
          return (
            <Post navigation={navigation} />
          )
        })}
      </ScrollView>

      <BottomTabs navigation={navigation} pageName={"Home"} />
    </SafeAreaView>
  )
}

export default home