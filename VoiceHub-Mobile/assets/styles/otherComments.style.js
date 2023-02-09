import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    comments:{
        flexDirection:"column",
    },
    userVoiceRecord:{
        bottom:0,
        flexDirection:"row",
    },
    userPic:{
        width:50,
        height:50,
        borderRadius:25,
    }
});