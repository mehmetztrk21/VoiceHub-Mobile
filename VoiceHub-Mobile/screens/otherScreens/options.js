import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import colors from '../../assets/colors';
import OtherHeader from "../components/otherHeader";

const options = ({ navigation }) => {
    return (
        <SafeAreaView style={{backgroundColor:colors.white, flex:1, width:'100%'}}>
            <OtherHeader navigation={navigation} HeaderTitle={'Options'}/>
            <Text>Options Page is Here!</Text>
        </SafeAreaView>
    )
}

export default options