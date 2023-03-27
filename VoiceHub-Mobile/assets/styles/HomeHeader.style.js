import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper:{
        position:"absolute",
        width:'100%',
        top:0,
        zIndex:999,
        backgroundColor:colors.white,
    },
    head: {
        padding: "5%",
        flexDirection: "column",
    },
    FirstRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
})