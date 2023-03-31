import React from 'react';
import { Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import ver from "../../assets/ver.png";
import otherHeaderStyle from "../../assets/styles/otherHeader.style";

const { width } = Dimensions.get("window");
const otherHeader = ({ navigation, HeaderTitle, isVerify }) => {
    return (
        <View style={[otherHeaderStyle.wrapper, { paddingTop: width * 0.07 }]}>
            <View style={otherHeaderStyle.aHeadView}>
                <TouchableOpacity onPress={() => navigation.goBack("HomeScreen")}>
                    <Icon type="ionicon" size={30} name={"arrow-back-outline"} style={otherHeaderStyle.BackButton} />
                </TouchableOpacity>
                <Text style={otherHeaderStyle.headerName}>{HeaderTitle}</Text>
                {isVerify ? (
                    <Image source={ver} style={{ width: 24, height: 24, paddingLeft: 8, alignSelf: "center" }} />
                ) : null}
            </View>
        </View>
    )
}

export default otherHeader