import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  scroll: {
    marginTop: 80,
    marginBottom: 50,
    width: "100%",
  },
  uploadMargin: {
    marginBottom: 120,
  },
  popUpMargin:{
    marginBottom: 140,
  },

  actView: {
    flexDirection: "row",
    padding: 10,
    marginTop: 12,
    top: 0,
    left: 5,
    width: "96%",
  },
  userPic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    margin: 10,
    marginLeft: "1%",
    marginVertical: -12,
    borderWidth: 3,
    borderColor: "black",
  },
  followContents: {
    flexDirection: "row",
  },
  postCount: {
    flexDirection: "column",
    textAlign: "center",
    paddingLeft: 28,
  },
  followerCount: {
    flexDirection: "column",
    textAlign: "center",
    paddingLeft: 28,
  },
  followCount: {
    flexDirection: "column",
    textAlign: "center",
    paddingLeft: 28,
  },
  fNumber: {
    fontWeight: "bold",
    fontSize: 18,
  },

  bioContents: {
    marginLeft: "5%",
    paddingTop: "3%",
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
  },

  btnHolder: {
    marginBottom: "2%",
    marginTop: "1%",
    paddingBottom: "2%",
    marginLeft: "10%"
  },
  editProfileAndFollow: {
    backgroundColor: colors.green,
    borderRadius: 5,
    marginTop: "2%",
    marginBottom: "2%",
    paddingVertical: "1%",
    width: "80%"
  },
  btnTextF: {
    fontSize: 16,
    color: colors.white,
    alignSelf: "center"
  },

  postView: {
    backgroundColor: colors.white,
    paddingTop: 5,
    flexDirection: "column",
    width: "100%",
  },

});