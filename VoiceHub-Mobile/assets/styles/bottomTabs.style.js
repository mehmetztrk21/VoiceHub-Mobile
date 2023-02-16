import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper:{
        position:"fixed",
        width:'100%',
        bottom:0,
        zIndex:999,
        backgroundColor:'#FFF'
    },
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        height:50,
        paddingTop:10,
    }
})