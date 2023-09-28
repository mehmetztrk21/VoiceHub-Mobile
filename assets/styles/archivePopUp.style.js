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
    buttonHolder: {
        flexDirection: "row",
        paddingVertical: 10
    },
    button: {
        fontSize: 16,
        fontWeight: "700",
        paddingVertical: 5,
        textAlign: "center",
        color: colors.white,
    },
    closeButton: {
        color: colors.green,
        fontSize: 14,
        textAlign: "center",
        fontWeight: "600",
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
    },

})