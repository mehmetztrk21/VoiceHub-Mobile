import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import ver from "../../assets/ver.png"
import avatar from "../../assets/avatar.png"
import { Icon } from "react-native-elements"
import colors from "../../assets/colors"
import RenderLastSearchedUserStyle from "../../assets/styles/RenderLastSearchedUser.style"
import { baseURL } from "../../utils/constants"
import { useUser } from "../../utils/userContext"
const RenderLastSearchedUser = ({ navigation, users }) => {

  const { user } = useUser();

  return users?.map((item, index) => (
    <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>

      <TouchableOpacity style={RenderLastSearchedUserStyle.last} key={index}
        onPress={() => {
          item?.id == user?._id ?
            navigation.navigate("ProfileScreen", { username: user?.username }) :
            navigation.navigate("SeeProfile", { userId: item?.id })
        }}>
        {item.userPic ?
          <Image source={{ uri: baseURL + item.userPic }} style={RenderLastSearchedUserStyle.lastSearchImage} /> :
          <Image source={avatar} style={RenderLastSearchedUserStyle.lastSearchImage} />
        }
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "700", fontSize: 16, marginLeft: 3.5 }}>{item.username}</Text>
          {item?.isTic ?
            <Image source={ver} style={{ width: 16, height: 16, marginLeft: 3.5 }} /> :
            null}
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: "center" }}>
        <Icon type={"font-awesome"} size={20} name={"times"} color={colors.gray} />
      </TouchableOpacity>
    </View >
  ));
}

export default RenderLastSearchedUser