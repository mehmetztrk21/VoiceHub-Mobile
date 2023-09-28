import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        width: "100%"
    },
    oldPasswordHeader: {
        marginBottom: "0.5%",
        marginTop: "1.5%",
        marginLeft: "8%",
        fontWeight: "500",
        fontSize: 16,
    },
    oldPasswordInput: {
        backgroundColor: "lightgray",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: "2%",
        width: "80%",
        marginLeft: "8%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    newPasswordHeader: {
        marginBottom: "0.5%",
        marginTop: "1.5%",
        marginLeft: "8%",
        fontWeight: "500",
        fontSize: 16,
    },
    newPasswordInput: {
        backgroundColor: "lightgray",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: "2%",
        width: "80%",
        marginLeft: "8%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    repeatHeader: {
        marginBottom: "0.5%",
        marginTop: "1.5%",
        marginLeft: "8%",
        fontWeight: "500",
        fontSize: 16,
    },
    confirmButton: {
        backgroundColor: colors.green,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 40,
        width: "50%",
        marginLeft: "25%",
        marginTop: "5%"
    },
    confirmButtonText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: "600",
        textAlign: "center"
    },
})