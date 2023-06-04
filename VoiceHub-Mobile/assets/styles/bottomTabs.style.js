import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: "100%",
        zIndex: 999,
        backgroundColor: colors.green,
        bottom: 0,
        justifyContent: "center",
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
})