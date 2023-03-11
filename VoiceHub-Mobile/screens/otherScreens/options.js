import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import OtherHeader from "../components/otherHeader";

const options = ({ navigation }) => {
    return (
        <SafeAreaView>
            <OtherHeader navigation={navigation} HeaderTitle={'Options'}/>
            <Text>Options Page is Here!</Text>
        </SafeAreaView>
    )
}

export default options