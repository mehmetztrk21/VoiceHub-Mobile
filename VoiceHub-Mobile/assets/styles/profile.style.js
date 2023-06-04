import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    backgroundColor: colors.green,
  },
  actView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 22,
    justifyContent: "center",
  },
  userPic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginLeft: 10,
    marginVertical: -12,
    borderWidth: 3,
    borderColor: colors.darkGray,
  },
  followContents: {
    flexDirection: "row",
  },
  postCount: {
    flexDirection: "column",
    textAlign: "center",
    paddingLeft: "10%",
    alignItems: "center",
  },
  followerCount: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    paddingLeft: "10%",
  },
  followCount: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    paddingLeft: "10%",
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
    fontSize: 16,
    fontWeight: "700",
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
    backgroundColor: colors.green,
    borderRadius: 25,
    marginTop: "2%",
    marginBottom: "2%",
    paddingVertical: "1%",
    marginLeft: "6.6666%",
    width: "40%",
  },
  btnTextF: {
    fontSize: 16,
    color: colors.white,
    alignSelf: "center",
  },


  scroll: {
    width: "100%",
    paddingBottom: "16%",
  },
  uploadMargin: {
    marginBottom: 120,
  },
  popUpMargin: {
    marginBottom: 140,
  },
  postView: {
    paddingTop: "1%",
    flexDirection: "column",
    width: "100%",
  },

});