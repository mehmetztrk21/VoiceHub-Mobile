import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Icon, Slider } from "react-native-elements";
import postStyle from "../../assets/styles/post.style";

const Play = () => {
  alert("Played Voice !");
}

  export default function Post(){
    return(
        <View style={postStyle.post}>
        <TouchableOpacity style={postStyle.playButton} onPress={Play}>
          <Icon type="feather" size={"175%"} name={"play"} />
        </TouchableOpacity>

        <Slider 
            style={postStyle.slider}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#0095f6"
            maximumTrackTintColor="#777777"
            thumbTintColor="#0095f6"
          />
      </View>
    );
  }