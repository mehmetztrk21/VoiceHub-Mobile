import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    container: {
        position: "fixed",
        width: '100%',
        zIndex: 999,
        bottom: -2,
        paddingBottom: 7.5,
    },
    button: { 
        fontSize: 15, 
        fontWeight: "700", 
        paddingVertical:5,
        textAlign:"center",
        color: colors.white,
    },
})