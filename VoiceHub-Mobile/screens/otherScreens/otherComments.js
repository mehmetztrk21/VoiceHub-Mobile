import React from "react";
import { View, Image, Modal } from "react-native";
import { Icon } from "react-native-elements";
import Comment from "../components/comment";

import user1 from "../../assets/userImages/user1.jpg";

import otherCommentsStyle from "../../assets/styles/otherComments.style";

export default function OtherComments(showOtherComments) {
    return (
        <Modal style={{width:"100%"}} onRequestClose={()=>{!showOtherComments}}>
    <View>
    {showOtherComments.showOtherComments?(
        <View style={otherCommentsStyle.container}>
            <View style={otherCommentsStyle.comments}>
                {/*map kullanacagim*/}
                <Comment />
            </View>
            <View style={otherCommentsStyle.userVoiceRecord}>
                <Image style={otherCommentsStyle.userPic} source={user1}/>
                <Icon type="feather" size={28} name={"mic"} />
            </View>

        </View>
    ):null}
    </View>
    </Modal>
    );
}