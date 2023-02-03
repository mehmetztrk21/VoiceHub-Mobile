import { StyleSheet } from "react-native";

export default StyleSheet.create({
    postContainer: {
      marginBottom: 20,
    },
  
    postUser: {
      flex: 1,
      flexDirection: "row",
      margin: 10,
    },
    userpostImg: {
      height: 30,
      width: 30,
      borderRadius:30,
    },
    userName: {
      fontSize: 18,
      fontWeight: "700",
    },
    userpic: {
      width: 30,
      height: 30,
      overflow: "hidden",
      borderRadius: 30,
      backgroundColor: "black",
      marginRight: 10,
    },
  
    postcaption: {
      fontSize: 15,
      fontWeight: "bold",
    },
  
    postActions: {
      flex: 1,
      flexDirection: "row",
      margin: 10,
      marginTop: 0,
      marginBottom: 0,
    },
  
    textCounter: {
      flex: 1,
      flexDirection: "column",
      margin: 10,
      marginTop: 0,
    },
  
    likesText: {
      fontWeight: "bold",
      fontSize: 14,
    },
  
    textHolder: {
      flex: 1,
      flexDirection: "row",
      marginTop: 0,
    },
  
    userCap: {
      fontWeight: "bold",
      fontSize: 16,
    },
  
    captext: {
      fontSize: 16,
    },
  
    pactions: {
      margin: 10,
    },
  
    postimg: { 
      width: 389, 
      height: 389 
    },
  });