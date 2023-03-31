import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import areYouSureStyle from '../../assets/styles/areYouSure.style'
const areYouSure = ({ process, navigation, setOpenAreYouSure }) => {

    const Operation = (status) => {
        if (status) {
            if (process == "LogOut") {
                navigation.navigate("Login");
            }
            else if (process == "DeleteComment") {
                console.log("Deleted Comment")
                //yorumları çekince gelecek
            }
            else {
                //continue
            }
        }
        else {
            setOpenAreYouSure(false);
        }
    }

    return (
        <View style={areYouSureStyle.container}>
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