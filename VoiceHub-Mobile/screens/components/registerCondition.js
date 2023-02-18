import { Alert } from "react-native";

export const registerCondition = (firstName, lastName, userName, email, password1, password2) => {
    if ((firstName, lastName, userName, email, password1, password2) !== "") {
        if (password1 == password2) {
            if (userName.length >= 3) {
                if (password1.length >= 8) {
                    return true
                }
                else {
                    Alert.alert("Password length may be 8 chart");
                }
            }
            else {
                Alert.alert("User Name length may be 8 chart");
            }
        }
        else {
            Alert.alert("Passwords don't equal");
        }
    }
    else {
        Alert.alert("don't boş bırakma");
    }
}