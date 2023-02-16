import { StyleSheet } from "react-native";

export default StyleSheet.create({
    postUser:{
        borderBottomColor:'#DADADA',
        borderBottomWidth:0.5,
        flexDirection:"row",
        paddingVertical:"1%",
        marginHorizontal: "3%",
    },
    clickUserPic:{
        flexDirection:'row',
        alignItems:"center"
    },
    userpostImg:{
        width:30,
        height:30,
        borderRadius:15,
        marginRight:7.5,
    },
    userName:{
        fontSize:15,
    }
});