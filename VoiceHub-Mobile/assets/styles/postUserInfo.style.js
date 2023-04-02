import { StyleSheet } from "react-native";
import colors from "../colors"

export default StyleSheet.create({
    postUser:{
        flexDirection:"row",
        paddingVertical:"1%",
        marginHorizontal: "3%",
        justifyContent:"space-between",
        alignItems:"center"
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
    username:{
        fontSize:16,
        fontWeight:"700",
        color:colors.black,
    },
    timeAgo:{
        fontSize:12.5,
        fontWeight:"400",
        color: colors.gray
    }
});