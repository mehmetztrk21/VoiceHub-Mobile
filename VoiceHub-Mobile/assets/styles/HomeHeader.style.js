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
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft:10,
        paddingRight:20,
        height:60,
        flexDirection: "row",
        justifyContent:"space-between",
        borderBottomWidth:0.5,
        borderBottomColor:"#DADADA",
    },
    rightTop:{
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    headerPactions:{
        paddingRight:15,
    },
})