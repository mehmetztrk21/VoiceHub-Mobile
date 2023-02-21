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
      content: {
        justifyContent: "center", 
        flexDirection: "row", 
        paddingLeft: '10%', 
        paddingRight: '2.5%', 
        width: "100%", 
        alignItems: "center",
      },
      time: {
        fontSize: 15,
        marginRight: 10,
        fontWeight: "700",
      },
})