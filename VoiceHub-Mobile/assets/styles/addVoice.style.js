import { StyleSheet } from "react-native";
import colors from "../colors"
export default StyleSheet.create({
  wrapper:{
    position:"fixed",
    width:'100%',
    bottom:0,
    zIndex:999,
    backgroundColor:'#FFF'
},
    container:{
        flex:1,
        width:'100%',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        height:70,
        paddingVertical:10,
    },
    content:{
      flexDirection:"row",
      alignItems:"center",
      paddingLeft:"5%",
    },
      time: {
        fontSize: 15,
        paddingLeft:"5%",
        fontWeight: "700",
      },
      touch:{
        marginRight:"5%",
        padding:"1%",
        borderRadius:"175%",
        borderColor:"#212121",
        borderWidth:2,
        backgroundColor:colors.green,
        color:colors.white,
      }
})