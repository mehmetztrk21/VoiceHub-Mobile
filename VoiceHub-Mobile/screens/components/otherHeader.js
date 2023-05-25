import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import otherHeaderStyle from "../../assets/styles/otherHeader.style";
import ver from "../../assets/ver.png";

const { width } = Dimensions.get("window");
const otherHeader = ({ navigation, HeaderTitle, isTic }) => {
    return (
        <View style={[otherHeaderStyle.wrapper, { paddingTop: width * 0.07 }]}>
            <View style={otherHeaderStyle.aHeadView}>
                <TouchableOpacity onPress={() => navigation.goBack("HomeScreen")}>
                    <Ionicons size={30} name={"arrow-back-outline"} style={otherHeaderStyle.BackButton} />
                </TouchableOpacity>
                <Text style={otherHeaderStyle.headerName}>{HeaderTitle}</Text>
                {isTic == true ? (
                    <Image source={ver} style={{ width: 24, height: 24, paddingLeft: 8, alignSelf: "center" }} />
                ) : null}
            </View>
        </View>
    )
}

export default otherHeader