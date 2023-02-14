import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import Slider from "../../screens/components/slider"
import postStyle from "../../assets/styles/post.style";

const Play = () => {
  alert("Played Voice !");
}

export default function Post() {
  return (
    <View style={postStyle.post}>
      <TouchableOpacity style={postStyle.playButton} onPress={Play}>
        <Icon type="feather" size={"175%"} name={"play"} />
      </TouchableOpacity>

      <Slider/>
    </View>
  );
}