import React from "react";
import { View, Text } from "react-native";

import seeProfileStyle from "../../assets/styles/seeProfile.style";

export default function SeeProfile() {
    return(
        <View style={seeProfileStyle.container}>
            <Text>See Profile</Text>
        </View>
    );
}