import { StyleSheet } from "react-native";
import colors from "../colors"
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
    },
    label:{
        fontSize:15,
        fontWeight:"500"
    },
    input: {
        backgroundColor: colors.lightgray,
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
        paddingVertical: "4%",
        paddingHorizontal: "6%",
        fontWeight:"500",
        fontSize:16,
      }
});