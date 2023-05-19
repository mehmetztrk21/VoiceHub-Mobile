import { StyleSheet } from "react-native";
import colors from "../colors";
export default StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    flex: 1,
  },

  scrollContainer: {
    backgroundColor: colors.white,
    width: "100%",
    flex: 1,
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
    paddingVertical: 10,
  },
});
