import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-elements"
import avatar from "../../assets/avatar.png"
import colors from "../../assets/colors"
import RenderLastSearchedUserStyle from "../../assets/styles/RenderLastSearchedUser.style"
import ver from "../../assets/ver.png"
import { baseURL } from "../../utils/constants"
import { useUser } from "../../utils/userContext"

import AsyncStorage from "@react-native-async-storage/async-storage"

const RenderLastSearchedUser = ({ navigation, lastUsers, users, title }) => {

  const { user } = useUser();
  const { last, setLast } = useUser();

  const deleteItem = async (id) => {
    const temp = [...last];
    temp.filter(o => o !== id);
    setLast(temp);
    await AsyncStorage.setItem("lasts", temp);
  }

  const touch = async (id) => {
    if (title == "search") {
      if (!(await AsyncStorage.getItem("lasts").includes(id))) {
        const temp = [...last];
        temp.push(id);
        setLast(temp);
        await AsyncStorage.setItem("lasts", temp);
      }
    }

    if (id == user._id) {
      navigation.navigate("ProfileScreen", { username: user?.username })
    }
    else {
      navigation.navigate("SeeProfile", { userId: id });
    }
  }


  return users?.map((item, index) => (
    <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-around", }} key={index}>

      <TouchableOpacity style={[RenderLastSearchedUserStyle.last, title == "last" ? { width: "70%" } : { width: "90%" }]}
        onPress={() => { touch(title == "last" ? item._id : item.id) }}>
        {title == "last" ? item.profilePhotoUrl : item.userPic ?
          <Image source={{ uri: title == "last" ? baseURL + item.profilePhotoUrl : baseURL + item.userPic }} style={RenderLastSearchedUserStyle.lastSearchImage} /> :
          <Image source={avatar} style={RenderLastSearchedUserStyle.lastSearchImage} />
        }
        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <Text style={{ fontWeight: "700", fontSize: 16, marginLeft: 3.5, }}>{title == "last" ? item.username : item.username}</Text>
          {title == "last" ? item.isTic : item?.isTic ? <Image source={ver} style={{ width: 16, height: 16, marginLeft: 3.5, }} /> : null}
        </View>
      </TouchableOpacity>

      {
        title == "last" ?
          < TouchableOpacity style={{ alignItems: "center", }} onPress={() => { deleteItem(item) }}>
            <Icon type={"font-awesome"} size={20} name={"times"} color={colors.gray} />
          </TouchableOpacity>
          : null
      }

    </View >
  ))


}

export default RenderLastSearchedUser