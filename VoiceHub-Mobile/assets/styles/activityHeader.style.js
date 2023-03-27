import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: '100%',
        top: 0,
        zIndex: 999,
        backgroundColor: colors.white
      },
      header: {
        left: 0,
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
      },
      headerName: {
        fontSize: 22,
        padding: 20,
        paddingRight: 8,
        paddingLeft: 10,
        fontWeight: "bold",
      },
})