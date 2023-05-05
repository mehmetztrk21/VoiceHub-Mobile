import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-elements"
import colors from "../../assets/colors.js"
import archivePopUpStyle from "../../assets/styles/archivePopUp.style.js"
import { setNotArchivePost } from "../../services/actionServices"

const archivePopUp = ({ id, setId }) => {

  const setNotArchive = async () => {
    await setNotArchivePost({ id: id });
    setId(false);
  }


  return (
    <View style={archivePopUpStyle.container}>
      <View style={archivePopUpStyle.container2}>

        <TouchableOpacity style={archivePopUpStyle.buttonHolder}
          onPress={setNotArchive}>
          <Icon name={"unarchive"} size={28} color={colors.white} />
          <Text style={archivePopUpStyle.button}>Unarchive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={archivePopUpStyle.buttonHolder}>
          <Icon type={"font-awesome"} name={"trash"} size={28} color={colors.red} />
          <Text style={[archivePopUpStyle.button, { color: colors.red }]}>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setId(false) }}>
          <Text style={archivePopUpStyle.closeButton}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default archivePopUp