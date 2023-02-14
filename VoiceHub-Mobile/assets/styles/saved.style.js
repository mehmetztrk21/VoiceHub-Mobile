import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
    paddingLeft: "5%",
  },
  header:{
    flexDirection: "row",
    paddingLeft:10,
  },
  headerName:{
    fontWeight: "bold",
    fontSize: 22,
    paddingLeft: 10,
  },
  savedPostContainer:{
    marginBottom:10,
  },
  savedPosts:{
    flexDirection:"row",
  },
  profilePhoto:{
    width: 50,
    height:50,
    borderRadius:25,
  },
});