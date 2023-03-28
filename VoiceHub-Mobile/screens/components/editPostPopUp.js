import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

import { Icon } from 'react-native-elements'

import colors from '../../assets/colors.js'
import editPostPopUpStyle from '../../assets/styles/editPostPopUp.style';

import { setArchivePost } from "../../services/postServices";

const editPostPopUp = ({ data, updateData }) => {

  const setArchive = async () => {
    const response = await setArchivePost({ id: "id" });
    console.log(response);
    if (response && response.success) {
      let temp = response.data.map((item) => {
        console.log(item.categories, "item.categories")
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
      setPosts(temp);
    }
  }

  return (
    <View style={[editPostPopUpStyle.container, { backgroundColor: colors.green, paddingHorizontal: 10, marginBottom: bottomSize }]}>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10 }}>
        <Icon type={'font-awesome'} name={'pencil'} size={28} color={colors.white} />
        <Text style={editPostPopUpStyle.button}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10 }}>
        <Icon type={'font-awesome'} name={'share'} size={28} color={colors.white} />
        <Text style={editPostPopUpStyle.button}>Share</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10 }}>
        <Icon type={'font-awesome'} name={'heart'} size={28} color={colors.white} />
        <Text style={editPostPopUpStyle.button}>Unshow Likes Count</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10 }}
        onPress={setArchive}>
        <Icon type={'font-awesome'} name={'archive'} size={28} color={colors.white} />
        <Text style={editPostPopUpStyle.button}>Archive</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10 }}>
        <Icon type={'font-awesome'} name={'trash'} size={28} color={colors.red} />
        <Text style={[editPostPopUpStyle.button, { color: colors.red }]}>Delete</Text>
      </TouchableOpacity>
    </View>
  )

}

export default editPostPopUp