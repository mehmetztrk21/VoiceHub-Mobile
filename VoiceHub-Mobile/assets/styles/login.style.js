import { StyleSheet } from "react-native";
import colors from "../colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.white
    },
    logoView: {
        alignItems: "center",
    },
    logo: {
        width: 192,
        height: 108,
    },
    label: {
        marginBottom: "0.5%",
        marginLeft: "8%",
        fontWeight: "500",
        fontSize: 16,
    },
    sbar: {
        backgroundColor: "lightgray",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: "2%",
        width: "80%",
        marginLeft: "8%"
    },

    passwordbar: {
        backgroundColor: "lightgray",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: "2%",
        width: "80%",
        marginLeft: "8%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    touch: {
        width: "55%",
        marginBottom: "2.5%",
        marginTop: "2.5%",
        marginLeft: "22.5%"
    },
    loginButton: {
        borderRadius: 25,
        backgroundColor: colors.green,
        color: colors.white,
        textAlign: "center",
        paddingVertical: "1.5%",
        fontWeight: "500",
        fontSize: 16,
    },
    textButton: {
        color: colors.green,
        textAlign: "center",
    },
});