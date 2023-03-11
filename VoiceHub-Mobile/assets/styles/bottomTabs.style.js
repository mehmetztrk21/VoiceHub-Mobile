import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper: {
        position: "fixed",
        width: '100%',
        bottom: 0,
        zIndex: 999,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#333333',
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 60,
        paddingTop: 20,
    }
})