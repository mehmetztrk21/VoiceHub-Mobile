import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import areYouSureStyle from "../../assets/styles/areYouSure.style"
import { deleteComment } from "../../services/commentServices"
import { deactivateAccount } from "../../services/actionServices"
import { logout } from "../../services/authServices"

const areYouSure = ({ process, navigation, openAreYouSure, setOpenAreYouSure }) => {

    const Operation = async (status) => {
        if (status) {
            if (process == "LogOut") {
                console.log("Log Out");
                await logout();
                setOpenAreYouSure(false);
                await AsyncStorage.clear();
                navigation.navigate("Login");
            }
            else if (process == "DeleteComment") {
                await deleteComment({ id: openAreYouSure });
                setOpenAreYouSure(false);
                console.log("Deleted Comment");
            }
            else if (process == "Freeze") {
                console.log("Freeze Account");
                await deactivateAccount();
                setOpenAreYouSure(false);
                console.log("LogOut");
                await AsyncStorage.clear();
                navigation.navigate("Login");
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
            <View style={areYouSureStyle.container2}>
                <Text style={areYouSureStyle.title}>Are you sure?</Text>

                <TouchableOpacity onPress={() => Operation(true)}>
                    <Text style={areYouSureStyle.button}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Operation(false)}>
                    <Text style={areYouSureStyle.button}>No</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default areYouSure