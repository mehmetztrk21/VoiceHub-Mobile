import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        height:70,
        paddingVertical:10,
    },
    wrapper:{
        position:"fixed",
        width:'100%',
        bottom:0,
        zIndex:999,
        backgroundColor:'#FFF'
    },
    click:{
        width:50, 
        height:50, 
        borderRadius:25, 
        borderColor:"#DADADA", 
        borderWidth:2,
        alignContent:"center",
    },
    time:{
        fontSize:14,
        fontWeight:"400"
    }
})