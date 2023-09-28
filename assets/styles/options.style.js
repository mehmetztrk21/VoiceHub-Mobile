import { StyleSheet } from "react-native";
import colors from "../colors";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        width: "100%"
    },
    isSecretAccount: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "25%",
        marginBottom: "5%",
        marginRight: "10%",
    },
    changeUsernameHolder: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "7.5%",
    },
    changeUsernameInput: {
        backgroundColor: colors.lightgray,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: "10%",
    },
    changeUsernameButton: {
        backgroundColor: colors.green,
        borderRadius: 40,
        padding: 10,
        alignSelf: "flex-end",
        marginBottom: "1%",
    },
    changeUsernameButtonText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: "600",
        textAlign: "center",
    },
    Button: {
        backgroundColor: colors.green,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 40,
        width: "50%",
        marginLeft: "25%",
        marginBottom: "5%",
    },
    buttonTexts:{ 
        fontSize: 16, 
        color: colors.white, 
        fontWeight: "600", 
        textAlign: "center", 
    },

    label: {
        marginBottom: "0.5%",
        marginTop: "1.5%",
        marginLeft: "8%",
        fontWeight: "500",
        fontSize: 16,
    },
});