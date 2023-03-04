import { StyleSheet } from "react-native";
import colors from "../colors"
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        alignItems:"center",
        justifyContent:"center",
    },
    inputs:{
        width:"80%"
    },
    label:{
        fontSize:15,
        fontWeight:"500"
    },
    input: {
        backgroundColor: "lightgray",
        borderRadius: 25,
        paddingVertical:10,
        paddingHorizontal:10,
        marginBottom:20,
      },
      ButtonText:{
        borderRadius: 25,
        backgroundColor: colors.green,
        color: colors.white,
        textAlign: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight:"500",
        fontSize:16,
      }
});