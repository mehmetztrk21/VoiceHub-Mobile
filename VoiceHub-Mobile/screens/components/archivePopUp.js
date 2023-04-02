import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../../assets/colors.js'
import archivePopUpStyle from "../../assets/styles/archivePopUp.style.js"
import { setNotArchivePost } from '../../services/actionServices'
import { baseURL } from '../../utils/constants.js'

const archivePopUp = ({ id, setId }) => {

  const [user, setUser] = useState({});

  const setNotArchive = async (res = null) => {
    const response = await setNotArchivePost({ id: id });
    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          username: res?.username,
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: baseURL + user?.profilePhotoUrl,
          likesCount: 1451,
          commentCount: 12,
          comments: item.comments,
        }
      });
      setId(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    getUserInfo().then(async (res) => {
      setUser(res);
      await setNotArchive(res);
    });
  }, [])

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