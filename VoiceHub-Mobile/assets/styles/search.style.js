import { StyleSheet } from "react-native";
import colors from "../colors";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBarHolder: {
    marginTop:60,
    width: "100%",
    height: 80,
    justifyContent: "center",
  },

  searchBar: {
    backgroundColor: colors.lightgray,
    borderRadius: 15,
    paddingVertical:10,
    paddingHorizontal:12.5,
  },
  widthChange2:{
    width:"87.5%",
    marginLeft:"6.25%"
  },
  widthChange1:{
    width:"80%",
    marginLeft:"6.25%"
  },
  scrollContainer: {
    backgroundColor: colors.white,
    width: "95%",
    marginBottom:60,
  },
  closeButtonTouch:{
    justifyContent:"center",
    marginLeft:"1%"
  },
});
