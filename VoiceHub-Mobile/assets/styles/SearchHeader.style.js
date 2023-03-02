import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper:{
        position:"fixed",
        width:'100%',
        top:0,
        zIndex:999,
        backgroundColor:'#FFF'
    },
    head: {
        paddingTop: 0,
        paddingBottom: 20,
        paddingLeft:10,
        paddingRight:20,
        height:64.8,
        flexDirection: "row",
        justifyContent:"space-between",
        borderBottomWidth:0.5,
        borderBottomColor:"#DADADA",
    },
})