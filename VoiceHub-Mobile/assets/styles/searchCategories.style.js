import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
    SecondRow:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    SecondText:{
        color:colors.white, 
        fontWeight:"500", 
        paddingVertical:10, 
        borderRadius:20, 
        fontSize:16,
    },
})