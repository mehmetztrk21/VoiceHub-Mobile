import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    wrapper:{
        position:"fixed",
        width:'100%',
        zIndex:999,
        backgroundColor:colors.white,
        bottom:0,
    },
        container:{
            flex:1,
            width:'100%',
            flexDirection:"row",
            alignItems:"center",
            paddingLeft:"2.5%",
            height:70,
            paddingVertical:10,
            borderBottomWidth:1.5,
            borderBottomColor:colors.lightgray,
        },
        text:{
            fontSize:15,
            fontWeight:"500",
            marginLeft:"2%"
        },

})