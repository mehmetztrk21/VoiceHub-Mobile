import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: '100%',
    top: 0,
    zIndex: 999,
    backgroundColor: colors.white,

  },
  aHeadView: {
    left: 0,
    width: "100%",
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  leftTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  BackButton: {
    paddingLeft: 10,
  },
  rightTop: {
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
    marginLeft: 3,
  },
  pactions: {
    paddingRight: 15,
  },
})