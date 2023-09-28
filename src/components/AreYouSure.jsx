import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"
import AwesomeAlert from "react-native-awesome-alerts"
import colors from "../../assets/colors"
import { deactivateAccount } from "../services/actionServices"
import { logout } from "../services/authServices"
import { deleteComment } from "../services/commentServices"

const AreYouSure = ({ process, navigation, openAreYouSure, setOpenAreYouSure, setLoading }) => {

    const Operation = async (status) => {
        if (status) {
            if (process == "LogOut") {
                setLoading(true)
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
                setLoading(true)
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
        <AwesomeAlert
            show={(((typeof openAreYouSure) == "string") || openAreYouSure == true) ? true : false}
            showProgress={false}
            message={process == "DeleteComment" ?
                ("Are you sure you want to delete the comment?") :
                process == "LogOut" ?
                    ("Are you sure you want to log out?") :
                    "Are you sure you want to freeze your account?"}
            messageStyle={{
                fontSize: 15,
                fontWeight: "500"
            }}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            showConfirmButton={true}
            showCancelButton={true}
            confirmText="Yes"
            cancelText="No"
            confirmButtonTextStyle={{ textAlign: "center", fontWeight: "600", fontSize: 16 }}
            confirmButtonStyle={{
                backgroundColor: colors.green,
                borderRadius: 30,
                width: "40%",
                marginTop: "5%",
            }}
            cancelButtonTextStyle={{ textAlign: "center", fontWeight: "600", fontSize: 16 }}
            cancelButtonStyle={{
                backgroundColor: colors.red,
                borderRadius: 30,
                width: "40%",
                marginTop: "5%",
            }}
            contentContainerStyle={{ borderRadius: 20 }}
            onConfirmPressed={() => {
                Operation(true)
            }}
            onCancelPressed={() => {
                Operation(false)
            }}
            onDismiss={() => Operation(false)}
        />

    )
}

export default AreYouSure