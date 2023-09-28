import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
    },
    container2: {
        width: "70%",
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
    title: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        color: colors.white,
        paddingBottom: 20,
        paddingTop: 10,
    },
    button: {
        fontSize: 16,
        fontWeight: "700",
        paddingVertical: 5,
        textAlign: "center",
        color: colors.white,
    },
})