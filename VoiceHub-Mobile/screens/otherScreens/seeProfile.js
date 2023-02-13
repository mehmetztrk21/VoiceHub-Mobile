import React from "react";
import { View, Text , Modal} from "react-native";

import seeProfileStyle from "../../assets/styles/seeProfile.style";

export default function SeeProfile(seeProfile) {
    return(
        <Modal style={{width:"100%"}} onRequestClose={()=>{!seeProfile}}>
    <View>
    {seeProfile.seeProfile?(
        <View style={seeProfileStyle.container}>
            <Text>See Profile</Text>
        </View>
    ):null}
    </View></Modal>
    );
}