import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import colors from '../../assets/colors';
import OtherHeader from "../components/otherHeader";

import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const Options = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: colors.white, flex: 1, width: '100%' }}>
            <OtherHeader navigation={navigation} HeaderTitle={'Options'} />
            <View style={{ marginTop: width * 0.04 }}>
                <Text>Options Page is Here!</Text>
            </View>
        </SafeAreaView>
    )
}

export default Options