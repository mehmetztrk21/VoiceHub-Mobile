import { StyleSheet } from "react-native";
import colors from "../colors";
export default StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    backgroundColor: colors.white,
  },

  scrollContainer: {
    backgroundColor: colors.white,
    width: "100%",
  },
  closeButtonTouch: {
    justifyContent: "center",
    marginLeft: "1%"
  },
  SecondText: {
    color: colors.white,
    fontWeight: "600",
    borderRadius: 30,
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",

  },
});
