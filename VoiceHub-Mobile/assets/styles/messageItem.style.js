import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        backgroundColor: '#fff',
        marginVertical:10,
        marginHorizontal:10,
        flexDirection:"row",
      },
      messageText:{
        flexDirection:"row",
        justifyContent:"space-between"
      },
      profilePhoto:{
        width:50,
        height:50,
        borderRadius:25,
      },
      userName:{
        fontWeight:"bold",
        fontSize:15,
        marginLeft:"5%",
      },
      voiceLenght:{
        marginLeft:"5%",
      },
      time:{
        justifyContent: 'flex-end',
      },
});