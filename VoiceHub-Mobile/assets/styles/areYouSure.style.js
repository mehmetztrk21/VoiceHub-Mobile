import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    container: {
        position: "fixed",
        width: '100%',
        zIndex: 999,
        bottom: -5,
        paddingBottom: 7.5,
        
    },
    title: {
        textAlign: "center",
        fontSize: 14, 
        fontWeight: "400",
        color: colors.white,
        paddingBottom:20,
        paddingTop:10,
    },
    button: { 
        fontSize: 16, 
        fontWeight: "700", 
        paddingVertical:5,
        textAlign:"center",
        color: colors.white,
    },
})