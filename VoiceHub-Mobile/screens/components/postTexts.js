import React from "react";
import { Image, Text, View } from "react-native";

import postTextsStyles from "../../assets/styles/postTexts.style";

export default function postTexts(){
    return(
<View style={postTextsStyles.textCounter}>
        {/*Posts Like Count*/}
        <Text style={postTextsStyles.likesText}>55 likes</Text>

        {/*User Name and User Caption*/}
        <View style={postTextsStyles.textHolder}>
          <Text style={postTextsStyles.userCap}></Text>
          <Text style={postTextsStyles.captext}> k.kayserili</Text>
        </View>

        {/*User Add Comment View*/}
        <View style={postTextsStyles.commentUser}>
          {/* Voice Recorder's PP is here */}
          <Image style={postTextsStyles.userPostCommentImg}/>

          {/* Voice Recorder for comments is here */}

        </View>

        <Text style={postTextsStyles.timeAgo}>29 minutes ago</Text>
      </View>
    );
}