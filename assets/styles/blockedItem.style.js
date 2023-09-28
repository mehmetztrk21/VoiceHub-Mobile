import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: "5%",
        justifyContent:"space-between",
    },
    profilePhoto: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: "2%",
    },
    username: {
        marginLeft: "4%",
        marginRight: "3%",
        fontWeight: "700",
        fontSize: 16,
    },
    verify: {
        width: 14,
        height: 14,
        paddingLeft: 4,
        alignSelf: "center"
    },
    removeButtonHolder: {
        width: "30%",
        alignItems: "center",
        padding: "2%",
        backgroundColor: colors.green,
        borderRadius: 12.5,
    },
    removeButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "600",
    },

})