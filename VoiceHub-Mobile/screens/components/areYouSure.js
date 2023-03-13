import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from "../../assets/colors"
import areYouSureStyle from '../../assets/styles/areYouSure.style'
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
        <View style={[areYouSureStyle.container,{marginBottom:bottomSize, background: colors.grad}]}>
            <Text style={areYouSureStyle.title}>Are you sure?</Text>

            <TouchableOpacity onPress={() => Operation(true)}>
                <Text style={areYouSureStyle.button}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Operation(false)}>
                <Text style={areYouSureStyle.button}>No</Text>
            </TouchableOpacity>
        </View>
    )
}

export default areYouSure