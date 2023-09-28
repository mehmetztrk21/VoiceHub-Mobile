import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flex: 1,
  },
  top: {
    flexDirection: "column",
    backgroundColor: colors.white,
    paddingBottom: 20,
    borderBottomRightRadius: 38,
    borderBottomLeftRadius: 38,
  },
  profilePhoto: {
    height: 150,
    width: 150,
    borderRadius: 150,
    marginTop: "1%",
    marginBottom: "1%",
    alignSelf: "center",
  },
  usernameHolder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: colors.black,
  },
  ver: {
    width: 20,
    height: 20,
    marginLeft: 3,
    alignSelf: "center",
  },
  postHolder: {
    paddingLeft: "20%",
    paddingRight: "2.5%",
  },
  categoryHolder: {
    alignItems: "center",
    flexDirection: "column",
  },
  postActionsHolder: {
    width: "50%",
    marginLeft: "25%",
  },
  comments: {
    marginBottom: "16%",
    width: "85%",
    marginLeft: "7.5%",
  },
  commentHolder: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: 15,
    padding: "1%",
  },
});