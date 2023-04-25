import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },


  actView: {
    flexDirection: "row",
    width: "96%",
    alignItems: "center",
  },
  userPic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    margin: "3%",
    marginLeft: "4%",
    borderWidth: 3,
    borderColor: colors.black,
  },
  followContents: {
    flexDirection: "row",
  },
  postCount: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    paddingRight: "5%",
    paddingLeft: "10%",
  },
  followerCount: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  followCount: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
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
    marginBottom: "3%",
  },


  btnHolder: {
    marginBottom: "2%",
    marginTop: "1%",
    paddingBottom: "2%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  editProfileAndFollow: {
    borderRadius: 25,
    marginTop: "2%",
    marginBottom: "2%",
    paddingVertical: "1%",
    width: "80%",
  },
  btnTextF: {
    fontSize: 16,
    color: colors.white,
    alignSelf: "center",
    fontWeight: "500",
  },


  scroll: {
    width: "100%",
  },
  postView: {
    paddingTop: "2%",
    flexDirection: "column",
    width: "100%",
  },
  leftTop: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingTop: "10%",
  },
  BackButton: {
    paddingLeft: "4%",
  },
  head: {
    fontSize: 22,
    paddingRight: "1%",
    fontWeight: "bold",
  },
  ver: {
    height: 22,
    width: 22,
    alignSelf: "center",
  },
});