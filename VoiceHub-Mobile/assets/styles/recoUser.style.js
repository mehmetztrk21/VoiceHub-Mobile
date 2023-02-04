import { StyleSheet } from "react-native";

export default StyleSheet.create({
    userListing: {
      margin: 10,
      flexDirection:"row",
      backgroundColor: "white",
      shadowColor: "black",
      shadowOpacity: 1,
      elevation: 4,
      alignItems: "center",
    },
  
    userPic: {
      width: 44,
      height: 44,
      borderRadius: 22,
      marginBottom: 5,
    },
  
    userName: {
      fontSize: 16,
      paddingLeft:18,
    },
    userTexts:{
      flexDirection:'column',
    },
    userJointFollowers:{
      paddingLeft:18,
      fontSize:12,
    },
  });
  