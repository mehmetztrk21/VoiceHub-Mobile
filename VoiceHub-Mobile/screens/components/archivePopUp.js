import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../../assets/colors.js'
import archivePopUpStyle from "../../assets/styles/archivePopUp.style.js"
import { setNotArchivePost } from '../../services/actionServices'

const archivePopUp = ({ id, setId }) => {

  const setNotArchive = async () => {
    const response = await setNotArchivePost({ id: id });
    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          userName: "Mehmet",
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: "user1",
          likesCount: 1451,
          caption: "Coffee is the most imp part of my life !",
          type: "sender",
          visible: true,
          category: "all",
          showLike: false,
          isSaved: false,
          isLiked: true,
          date: "12/02/2023 12:41",
          isYourFollower: true,
          isYouFollowing: true,
          commentCount: 12,
          hasBio: false,
          isVerify: false,
        }
      });
      setId(false);
    }
  }

  return (
    <View style={[archivePopUpStyle.container, { backgroundColor: colors.green, paddingHorizontal: 10 }]}>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10 }}
        onPress={setNotArchive}>
        <Icon name={'unarchive'} size={28} color={colors.white} />
        <Text style={archivePopUpStyle.button}>Unarchive</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10 }}>
        <Icon type={'font-awesome'} name={'trash'} size={28} color={colors.red} />
        <Text style={[archivePopUpStyle.button, { color: colors.red }]}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default archivePopUp