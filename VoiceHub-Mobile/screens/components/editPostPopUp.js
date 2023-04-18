import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "react-native-elements";

import colors from "../../assets/colors.js";
import editPostPopUpStyle from "../../assets/styles/editPostPopUp.style";

import { setArchivePost, setSeeLikes, } from "../../services/actionServices";

const editPostPopUp = ({ id, setId, postId }) => {

  const setArchive = async () => {
    await setArchivePost({ id: id });
    setId(false);
  }

  const setSeeLike = async () => {
    await setSeeLikes({ postId: id });
    setId(false);
  }

  return (
    <View style={editPostPopUpStyle.container}>
      <View style={editPostPopUpStyle.container2}>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Icon type={"font-awesome"} name={"pencil"} size={28} color={colors.white} />
          <Text style={editPostPopUpStyle.button}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Icon type={"font-awesome"} name={"share"} size={28} color={colors.white} />
          <Text style={editPostPopUpStyle.button}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}
          onPress={setSeeLike}>
          <Icon type={"font-awesome"} name={"heart"} size={28} color={colors.white} />
          {
            <Text style={editPostPopUpStyle.button}>Unshow Likes Count</Text>
          }
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}
          onPress={setArchive}>
          <Icon type={"font-awesome"} name={"archive"} size={28} color={colors.white} />
          <Text style={editPostPopUpStyle.button}>Archive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Icon type={"font-awesome"} name={"trash"} size={28} color={colors.red} />
          <Text style={[editPostPopUpStyle.button, { color: colors.red }]}>Delete</Text>
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

export default editPostPopUp