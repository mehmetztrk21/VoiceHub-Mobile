import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'

import colors from '../assets/colors'
import user1 from "../assets/images/userImages/user1.jpg"
import ver from "../assets/ver.png"
import BottomTabs from '../components/BottomTabs'
import Post from '../components/Post'
import UserPostData from "../components/UserPostData"

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, width: "100%", background: 'linear-gradient(to right, #1DB954, #006D5B)' }}>
      <View style={{
        backgroundColor: colors.white, borderBottomEndRadius: 20, borderBottomStartRadius: 20, position: "fixed",
        width: '100%',
        top: 0,
        zIndex: 999,
      }}>
        <Divider width={1} orientation='vertical' />
        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: "2%", marginVertical: "5%" }}>
          <Icon type='font-awesome' name='angle-left' color={colors.black} />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>k.kayserili</Text>
            <Image source={ver} style={{ width: 20, height: 20, marginLeft: "5%" }} />
          </View>

          <Icon type='font-awesome' name="ellipsis-v" color={colors.black} />
        </View>

        <View style={{ alignItems: "center" }}>
          <Image source={user1} style={{ width: 200, height: 200, borderRadius: 100 }} />
        </View>

        <View style={{ flexDirection: "column", paddingBottom: "5%" }}>
          <Text>Kaan Kayserili</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Icon type='font-awesome' name='play' color={colors.black} />
            <Text>Slider Gelecek</Text>
          </View>
        </View>
      </View>

      <ScrollView style={{ paddingHorizontal: "2.5%", paddingTop: 340, paddingBottom: 60 }}>
        {UserPostData.map(() => {
          return (
            <Post navigation={navigation} />
          )
        })

        }
      </ScrollView>

      <BottomTabs navigation={navigation} pageName={'Profile'} />
    </View>
  )
}

export default Profile