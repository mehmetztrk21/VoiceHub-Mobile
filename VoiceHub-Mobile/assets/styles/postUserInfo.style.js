import { StyleSheet } from "react-native";
import colors from "../colors"

export default StyleSheet.create({
    postUser:{
        flexDirection:"row",
        paddingVertical:"1%",
        marginHorizontal: "3%",
    },
    clickUserPic:{
        flexDirection:'row',
        alignItems:"center",
        paddingVertical:"2%"
    },
    userpostImg:{
        width:30,
        height:30,
        borderRadius:15,
        marginRight:7.5,
    },
    userName:{
        fontSize:16,
        fontWeight:"750",
        color:colors.black,
    },
    timeAgo:{
        fontSize:12.5,
        fontWeight:"400",
        color: colors.gray
    }
});