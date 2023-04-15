import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-elements"
import colors from "../../assets/colors.js"
import archivePopUpStyle from "../../assets/styles/archivePopUp.style.js"
import { setNotArchivePost } from "../../services/actionServices"
import { baseURL } from "../../utils/constants.js"
import { getUserInfo } from "../../utils/getUserInfo.js"

const archivePopUp = ({ id, setId }) => {

  const [user, setUser] = useState({});

  const setNotArchive = async () => {
    const response = await setNotArchivePost({ id: id });
    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          username: user?.username,
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: baseURL + user?.profilePhotoUrl,
          likes: item.likes,
          comments: item.comments,
        }
      });
      setId(false);
    }
  }

  useEffect(() => {
    getUserInfo().then(async (res) => {
      setUser(res);
    });
  }, [])

  return (
    <View style={archivePopUpStyle.container}>
      <View style={archivePopUpStyle.container2}>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}
          onPress={setNotArchive}>
          <Icon name={"unarchive"} size={28} color={colors.white} />
          <Text style={archivePopUpStyle.button}>Unarchive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Icon type={"font-awesome"} name={"trash"} size={28} color={colors.red} />
          <Text style={[archivePopUpStyle.button, { color: colors.red }]}>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setId(false) }}>
          <Text style={{
            color: colors.green, fontSize: 14, textAlign: "center", fontWeight: "600",
            backgroundColor: colors.white, padding: 10, borderRadius: 10,
          }}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default archivePopUp