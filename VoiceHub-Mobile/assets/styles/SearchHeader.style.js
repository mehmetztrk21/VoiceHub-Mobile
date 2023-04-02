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
        paddingHorizontal: "5%",
        paddingTop:"7%",
        flexDirection: "row",
        justifyContent:"space-between",
    },
    FirstRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
})