import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper: {
        width: "70%",
        alignSelf: "center",
        justifyContent: "center",
        top: "40%"
    },
    container: {
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: colors.green,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: "700",
        paddingBottom: 5,
        paddingHorizontal: 5,
        textAlign: "center",
        color: colors.white,
    },
    close: {
        color: colors.green,
        fontSize: 14,
        textAlign: "center",
        fontWeight: "600",
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
    },
})