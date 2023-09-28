import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    height: "8%",
    zIndex: 999,
    backgroundColor: colors.white,
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
  },
  container: {
    width: "90%",
    marginHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontSize: 15,
    fontWeight: "700",
  },
  touch: {
    padding: "1%",
    borderRadius: 25,
    height: 40,
    width: 40,
    borderColor: colors.black,
    borderWidth: 2,
    backgroundColor: colors.green,
    justifyContent: "center",
  },
  gifStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: "3%"
  },
})