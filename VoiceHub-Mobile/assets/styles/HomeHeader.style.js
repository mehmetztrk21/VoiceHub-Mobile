import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper:{
        position:"fixed",
        width:'100%',
        top:0,
        zIndex:999,
        backgroundColor:'#FFF',
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