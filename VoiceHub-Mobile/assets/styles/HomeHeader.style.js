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
        height:"20%",
        flexDirection: "column",
    },
    FirstRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    SecondRow:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    SecondText:{
        color:colors.white, 
        fontWeight:"500", 
        paddingHorizontal:20, 
        paddingVertical:10, 
        borderRadius:20, 
        fontSize:16,
    },
})