import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import Slider from "../../screens/components/slider"
import postStyle from "../../assets/styles/post.style";
// import Sound from 'react-native-sound'



export default function Post() {

  // const [music,setMusic]=useState(null);

  const Play = () => {
    // let voice = new Sound('iyiBilirim.mp3',Sound.MAIN_BUNDLE,(err)=>{
    //   if(err){
    //     console.log('hata',err)
    //     return
    //   }
    //     voice.play((success)=>{
    //       console.log('end', success);
    //     })
    // })
    // setMusic(voice)
  } 
  return (
    <View style={postStyle.post}>
      <TouchableOpacity style={postStyle.playButton} onPress={()=>Play()}>
        <Icon type="feather" size={"175%"} name={"play"} />
      </TouchableOpacity>

      <Slider />
    </View>
  );
}