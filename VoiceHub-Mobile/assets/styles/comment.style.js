import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingVertical: "1%",
        marginVertical: "1%",
        width:"100%",
        flexDirection:'row',
        height:60,
    },
    ProfilePhoto: {
        width: 50,
        heigth: 50,
        borderRadius: 25,
        marginHorizontal:"1%",
    },
    userName:{
        fontSize:14.5,
        fontWeight:"800"
    },
    date:{
        paddingLeft:5
    }
});