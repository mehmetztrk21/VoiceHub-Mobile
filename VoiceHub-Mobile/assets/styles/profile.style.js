import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
    aHeadView: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 90,
      width: "90%",
      marginTop: 22,
      flexDirection: "row",
      alignItems: "center",
    },
  
    head: {
      fontSize: 22,
      padding: 20,
      paddingRight: 8,
      fontWeight: "bold",
    },
  
    ver: {
      height: 22,
      width: 22,
    },
  
    profileScroll: {
      marginTop: 100,
      width: "100%",
      marginLeft: 1,
    },
  
    actView: {
      flexDirection: "row",
      padding: 10,
  
      top: 0,
      left: 5,
  
      width: "95%",
    },
  
    fView1: {
      flexDirection: "row",
      flex: 1,
      marginHorizontal: 20,
  
      height: 0,
    },
  
    fView: {
      flexDirection: "row",
      flex: 1,
      marginHorizontal: 20,
    },
  
    userPic: {
      width: 90,
      height: 90,
  
      borderRadius: 50,
      margin: 10,
      marginLeft: 4,
      marginVertical: 3,
      borderWidth: 3,
      borderColor: "black",
    },
  
    actText: {
      flexDirection: "row",
      flex: 1,
      fontSize: 20,
      textAlign: "center",
  
      fontWeight: "bold",
    },
  
    actText2: {
      flexDirection: "row",
      flex: 1,
      fontSize: 14,
      textAlign: "center",
      marginBottom: 0,
    },
  
    bioCont: {
      width: "95%",
      padding: 10,
  
      paddingLeft: 15,
      paddingTop: 5,
    },
  
    name: {
      fontSize: 15,
      fontWeight: "700",
    },
  
    catg: {
      color: "grey",
    },
    btnHolder: {
      marginBottom:"2%",
      marginTop:"1%",
    },
  
  
    follow: {
      backgroundColor: "#0095f6",
      borderRadius: 5,
      width:"85%",
      marginLeft:"7.5%",
      paddingTop:"2%",
      paddingBottom:"2%",
      
    },
    msg: {
      backgroundColor: "white",
      paddingLeft: 30,
      paddingVertical: 7,
  
      borderRadius: 5,
      marginHorizontal: 4,
      borderWidth: 1,
      borderColor: "black",
    },
    btnTextF: {
      fontSize: 16,
      color: "white",
      paddingLeft:"42.5%",
    },
  
    btnTextM: {
      fontSize: 15,
    },
  
    iconCont: {
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      width: "100%",
      backgroundColor: "whitesmoke",
      marginTop: 30,
      paddingVertical: 8,
    },
  
    icons: {
      marginHorizontal: 50,
    },
  
    postView: {
      backgroundColor: "white",
      paddingTop: 5,
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
  
      alignItems: "center",
    },
  });