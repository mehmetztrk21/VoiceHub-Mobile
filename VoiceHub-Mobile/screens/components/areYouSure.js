import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from "../../assets/colors"
const areYouSure = ({ process, navigation, bottomSize, setOpenAreYouSure }) => {

    const Operation = (status) => {
        process == true
        if (status == true) {
            if (process == 'LogOut') {
                navigation.push('Login');
            }
            else {
                //continue
            }
        }
        else{
            setOpenAreYouSure(false)
        }
    }

    return (
        <View style={{
            position: "fixed",
            width: '100%',
            zIndex: 999,
            bottom: -5,
            paddingBottom: 7.5,
            marginBottom: bottomSize,
            backgroundColor: colors.white,
        }}>
            <Text style={{ textAlign: "center", fontWeight: "400" }}>Are you sure?</Text>

            <TouchableOpacity onPress={() => Operation(true)}>
                <Text style={{ fontSize: 16, fontWeight: "700", borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.gray }}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Operation(false)}>
                <Text style={{ fontSize: 16, fontWeight: "700", borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.gray }}>No</Text>
            </TouchableOpacity>
        </View>
    )
}

export default areYouSure