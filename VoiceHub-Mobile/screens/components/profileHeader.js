import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../assets/colors';

import profileHeaderStyle from "../../assets/styles/profileHeader.style";
import verfy from "../../assets/ver.png";
import { useUser } from '../../utils/userContext';

const profileHeader = ({ navigation, pressLogo }) => {
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
            <Icon type="feather" size={28} name={"archive"} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={profileHeaderStyle.pactions} onPress={() => navigation.navigate("SavedArchived", { HeaderTitle: 'Saved' })}>
            <Icon type="font-awesome" size={28} name={"bookmark-o"} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={profileHeaderStyle.pactions} onPress={() => navigation.navigate("ActivityScreen")}>
            <Icon type="font-awesome" size={30} name={'heart-o'} color={colors.black} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default profileHeader