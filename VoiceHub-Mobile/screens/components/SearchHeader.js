import React from "react";
import { Dimensions, Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import logo from "../../assets/images/VoiceHub-1.png";
import SearchHeaderStyle from "../../assets/styles/SearchHeader.style";

const { width, height } = Dimensions.get("window");

const SearchHeader = ({ pressLogo }) => {
    return (
        <SafeAreaView style={SearchHeaderStyle.wrapper}>
            <View style={[SearchHeaderStyle.head, { paddingTop: height * 0.05, flexDirection: "column" }]}>
                <TouchableOpacity onPress={pressLogo}>
                    <Image source={logo} style={{ width: width * 0.3, height: height * 0.06, marginVertical: height * 0.02, marginLeft: width * 0.0375 }} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default SearchHeader