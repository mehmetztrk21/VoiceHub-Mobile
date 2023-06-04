import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "../../assets/colors.js";
import archivePopUpStyle from "../../assets/styles/archivePopUp.style.js";
import { setNotArchivePost } from "../../services/actionServices";

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
          <FontAwesome5 name={"unarchive"} size={28} color={colors.white} />
          <Text style={archivePopUpStyle.button}>Unarchive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={archivePopUpStyle.buttonHolder}>
          <Ionicons type={"font-awesome"} name={"trash"} size={28} color={colors.red} />
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