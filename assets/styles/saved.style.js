import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.white,
    width: "100%",
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
    marginTop:65,
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