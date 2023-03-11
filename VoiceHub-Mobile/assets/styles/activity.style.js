import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  actView: {
    flexDirection: "row",
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 10,
    alignItems: "center",
    paddingLeft: 15,
  },

  userPic: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginLeft: 4,
    marginRight: 10,
    marginVertical: 2,
  },

  actText: {
    fontSize: 14,
  },
  date:{
    fontSize:12,
    color:colors.gray,
    marginLeft:5,
    textAlignVertical:"center"
  },
  header: {
    flexDirection: "row",
    paddingLeft:10,
    
  },

  headerName: {
    fontSize: 22,
    padding: 20,
    paddingLeft: 5,
    fontWeight: "bold",
  },

  sContainer: {
    backgroundColor: "white",
    width: "95%",
    paddingTop:60,
    paddingBottom:60,
  },
});