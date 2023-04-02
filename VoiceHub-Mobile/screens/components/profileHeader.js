import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../assets/colors';

import profileHeaderStyle from "../../assets/styles/profileHeader.style";
import verfy from "../../assets/ver.png";
import { getUserInfo } from '../../utils/getUserInfo';

const profileHeader = ({ navigation, username, id, isVerify }) => {
  const [user, setUser] = React.useState({})
  useEffect(() => {
    getUserInfo().then((res) => {
      setUser(res)
    })
  }, [])
  return (
    <View style={profileHeaderStyle.wrapper}>
      <View style={profileHeaderStyle.aHeadView}>
        <View style={profileHeaderStyle.leftTop}>

          <Text style={profileHeaderStyle.head}>{username}</Text>

          {isVerify ? (
            <Image source={verfy} style={profileHeaderStyle.ver} />
          ) : null}
        </View>

        <View style={profileHeaderStyle.rightTop}>
          <TouchableOpacity style={profileHeaderStyle.pactions} onPress={() => navigation.navigate("SavedArchived", { username: username, HeaderTitle: 'Archived', id: id })}>
            <Icon type="feather" size={28} name={"archive"} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={profileHeaderStyle.pactions} onPress={() => navigation.navigate("SavedArchived", { username: username, HeaderTitle: 'Saved', id: id })}>
            <Icon type="font-awesome" size={28} name={"bookmark-o"} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={profileHeaderStyle.pactions} onPress={() => navigation.navigate("ActivityScreen", { username: username })}>
            <Icon type="font-awesome" size={30} name={'heart-o'} color={colors.black} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default profileHeader