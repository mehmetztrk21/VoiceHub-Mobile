import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: "100%",
        height: "8%",
        zIndex: 999,
        backgroundColor: colors.green,
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: "center",
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
})