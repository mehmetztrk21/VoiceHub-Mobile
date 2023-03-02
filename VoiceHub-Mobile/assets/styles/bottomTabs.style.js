import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper:{
        position:"fixed",
        width:'100%',
        bottom:0,
        zIndex:999,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        height:60,
        paddingTop:20,
    }
})