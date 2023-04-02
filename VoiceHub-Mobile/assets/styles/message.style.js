import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: "100%",
  },
  searchView: {
    width: "85%",
    marginHorizontal: "7.5%",
    marginTop: 70,
  },
  SearchBar: {
    paddingVertical: 10,
    paddingHorizontal: 12.5,
    backgroundColor: "lightgray",
    borderRadius: 15,
  },
  Items: {
    flexDirection: "column",
    marginVertical: "2.5%",
    paddingLeft:"5%",
  },
});