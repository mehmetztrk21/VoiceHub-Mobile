import React, { useEffect } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-elements"
import avatar from "../../assets/avatar.png"
import colors from "../../assets/colors"
import RenderLastSearchedUserStyle from "../../assets/styles/RenderLastSearchedUser.style"
import ver from "../../assets/ver.png"
import { baseURL } from "../../utils/constants"
import { useUser } from "../../utils/userContext"

import AsyncStorage from "@react-native-async-storage/async-storage"

const RenderLastSearchedUser = ({ navigation, users, title }) => {

  const { user } = useUser();
  const { last, setLast } = useUser();

  {/*const deleteItem = async (id) => {
    const temp = { ...last };
    temp.filter(o => o !== id);
    setLast(temp);
    await AsyncStorage.setItem("lasts", temp);
  }
*/}
  const touch = async (id, item) => {
    console.log("touch'a gitti");

    if (title === "search") {
      if (JSON.parse(setLast)._id !== id) {
        const temp = { ...last };
        temp += item;
        setLast(temp);
        console.log(temp);
      }
    }
  }

  const renderUsers = () => {
    return users?.map((item, index) => (

      <TouchableOpacity style={[RenderLastSearchedUserStyle.last, { width: "90%" }]}
        onPress={() => { touch(item._id, item); { item?._id == user._id ? navigation.navigate("ProfileScreen") : navigation.navigate("SeeProfile", { userId: item?._id }); } }}>
        {item.profilePhotoUrl ?
          <Image source={{ uri: baseURL + item.profilePhotoUrl }} style={RenderLastSearchedUserStyle.lastSearchImage} /> :
          <Image source={avatar} style={RenderLastSearchedUserStyle.lastSearchImage} />
        }
        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <Text style={{ fontWeight: "700", fontSize: 16, marginLeft: 3.5, }}>{item.username}</Text>
          {item?.isTic ? <Image source={ver} style={{ width: 16, height: 16, marginLeft: 3.5, }} /> : null}
        </View>
      </TouchableOpacity>
    ))
  }

  const renderLasts = () => {
    return last?.map((item, index) => {
      <View>
        <TouchableOpacity style={[RenderLastSearchedUserStyle.last, title == "last" ? { width: "70%" } : { width: "90%" }]}
          onPress={() => { touch(item._id); { item?._id == user._id ? navigation.navigate("ProfileScreen") : navigation.navigate("SeeProfile", { userId: item?._id }); } }}>
          {item.profilePhotoUrl ?
            <Image source={{ uri: baseURL + item.profilePhotoUrl }} style={RenderLastSearchedUserStyle.lastSearchImage} /> :
            <Image source={avatar} style={RenderLastSearchedUserStyle.lastSearchImage} />
          }
          <View style={{ flexDirection: "row", alignItems: "center", }}>
            <Text style={{ fontWeight: "700", fontSize: 16, marginLeft: 3.5, }}>{item.username}</Text>
            {item?.isTic ? <Image source={ver} style={{ width: 16, height: 16, marginLeft: 3.5, }} /> : null}
          </View>
        </TouchableOpacity>

        < TouchableOpacity style={{ alignItems: "center", }} onPress={() => { /*deleteItem(item)*/ }}>
          <Icon type={"font-awesome"} size={20} name={"times"} color={colors.gray} />
        </TouchableOpacity>
      </View>
    })
  }

  return (
    <View style={{ width: "100%", alignItems: "center", justifyContent: "space-around", }}>
      {title == "search" ?
        renderUsers() :
        renderLasts()
      }
    </View >
  )


}

export default RenderLastSearchedUser