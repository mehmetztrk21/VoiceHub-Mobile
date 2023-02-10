import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginVertical:10,
        marginHorizontal:10,
        flexDirection:"row"
      },
      profilePhoto:{
        width:50,
        height:50,
        borderRadius:25,
      },
      messageTexts:{
        
      },
      userName:{
        fontWeight:"bold",
        fontSize:15,
        marginLeft:"5%"
      },
      messageContents:{
        flexDirection:"row",
        justifyContent:"space-between"
      },
      voiceLenght:{
        marginLeft:"5%"
      },
      time:{
        marginRight:"5%"
      },
});