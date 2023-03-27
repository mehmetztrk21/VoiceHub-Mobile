import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: '100%',
        zIndex: 999,
        bottom: -5,
        paddingBottom: 7.5,
    },
    container: {
        flex: 1,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "2.5%",
        height: 70,
        paddingVertical: 10,

    },
    text: {
        fontSize: 15,
        fontWeight: "500",
        marginLeft: "2%",
        color: colors.white,
    },

})