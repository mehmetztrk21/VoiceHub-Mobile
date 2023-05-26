import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    container: {
        width: "70%",
        alignSelf: "center",
        justifyContent: "center",
        top: "40%"
    },
    container2: {
        width: "70%",
        alignSelf: "center",
        justifyContent: "center",
        paddingHorizontal: 40,
        paddingVertical: 25,
        borderRadius: 25,
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
    button: {
        fontSize: 16,
        fontWeight: "700",
        paddingVertical: 5,
        marginLeft: 10,
        textAlign: "center",
        color: colors.white,
    },
})