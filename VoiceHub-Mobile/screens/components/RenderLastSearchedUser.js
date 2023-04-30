import React, { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import ver from "../../assets/ver.png"
import avatar from "../../assets/avatar.png"
import { Icon } from "react-native-elements"
import colors from "../../assets/colors"
import RenderLastSearchedUserStyle from "../../assets/styles/RenderLastSearchedUser.style"
import { baseURL } from "../../utils/constants"
import { useUser } from "../../utils/userContext"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { getUserById } from "../../services/userServices"

const RenderLastSearchedUser = ({ navigation, users, title }) => {

  const { user, last, setLast } = useUser();

  const [lastUser, setLastUser] = useState({});

  useEffect(() => {
    last?.map((item, index) => {
      getUserById({ id: item }).then(async (res) => {
        setLastUser(res?.data);
      }).catch((err) => {
        console.log(err);
      })
    })
  }, []);

  const deleteItem = async (item) => {
    const temp = [...last];
    temp.filter(o => o !== item?.id);
    setLast(temp);
    await AsyncStorage.setItem("lasts", temp);
  }

  const touch = async (item) => {
    if (title == "search") {
      if (!(await AsyncStorage.getItem("lasts").includes(item?.id))) {
        const temp = [...last];
        temp.push(item?.id);
        setLast(temp);
        await AsyncStorage.setItem("lasts", temp);
      }
    }

    if (item.id == user._id) {
      navigation.navigate("ProfileScreen", { username: user?.username })
    }
    else {
      navigation.navigate("SeeProfile", { userId: item?.id });
    }
  }

  return title == "last" ? lastUser : users?.map((item, index) => (
    <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>

      <TouchableOpacity style={[RenderLastSearchedUserStyle.last, title == "last" ? { width: "70%" } : { width: "90%" }]} key={index}
        onPress={() => { touch(item.id) }}>
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

      {title == "last" ?
        < TouchableOpacity style={{ alignItems: "center" }} onPress={() => { deleteItem(item) }}>
          <Icon type={"font-awesome"} size={20} name={"times"} color={colors.gray} />
        </TouchableOpacity>
        : null}
    </View >
  ));
}

export default RenderLastSearchedUser