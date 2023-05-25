import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../assets/colors';

import profileHeaderStyle from "../../assets/styles/profileHeader.style";
import verfy from "../../assets/ver.png";
import { useUser } from '../../utils/userContext';

const profileHeader = ({ navigation, pressLogo, setVisiblePopUp }) => {
  const { user } = useUser();

  return (
    <View style={profileHeaderStyle.wrapper}>
      <View style={profileHeaderStyle.aHeadView}>
        <View style={profileHeaderStyle.leftTop}>
          <TouchableOpacity onPress={pressLogo} style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={profileHeaderStyle.head}>{user?.username}</Text>

            {user?.isTic == true ? (
              <Image source={verfy} style={profileHeaderStyle.ver} />
            ) : null}
          </TouchableOpacity>
        </View>

        <View style={profileHeaderStyle.rightTop}>
          <TouchableOpacity style={profileHeaderStyle.pactions} onPress={() => navigation.navigate("SavedArchived", { HeaderTitle: 'Archived' })}>
            <Ionicons size={28} name={"archive-outline"} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={profileHeaderStyle.pactions} onPress={() => navigation.navigate("SavedArchived", { HeaderTitle: 'Saved' })}>
            <Ionicons size={28} name={"bookmark-outline"} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={profileHeaderStyle.pactions} onPress={() => setVisiblePopUp(true)}>
            <Ionicons size={30} name={'reorder-three-outline'} color={colors.black} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default profileHeader