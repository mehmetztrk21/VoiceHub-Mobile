import { StyleSheet } from "react-native";
import colors from "../colors";
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    backgroundColor: colors.white,
  },

  searchBarHolder: {
    marginTop: "24%",
    width: "100%",
    justifyContent: "center",
    paddingVertical: "1%",
  },

  searchBar: {
    backgroundColor: colors.lightgray,
    borderRadius: 22.5,
    paddingVertical: 10,
    paddingHorizontal: 12.5,
  },

  scrollContainer: {
    backgroundColor: colors.white,
    width: "100%",
    paddingBottom: "16%",
  },
  closeButtonTouch: {
    justifyContent: "center",
    marginLeft: "1%"
  },
  SecondText: {
    color: colors.white,
    fontWeight: "600",
    paddingVertical: 10,
    borderRadius: 30,
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",

  },
});
