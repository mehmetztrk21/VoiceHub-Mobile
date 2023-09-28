import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: "100%",
        zIndex: 999,
        backgroundColor: colors.white,
    },
    aHeadView: {
        left: 0,
        width: "100%",
        flexDirection: "row",
        borderBottomEndRadius:20,
        borderbottomStartRadius:20,
        paddingLeft:10,
    },
    BackButton: {
        paddingTop: 15,
    },
    headerName: {
        fontSize: 24,
        paddingTop: 13,
        paddingBottom: 13,
        marginLeft: 8,
        fontWeight: "600",
    },
})