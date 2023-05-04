import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: colors.green,
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
  messageButtonHolder: {
    width: "42.5%",
    alignItems: "center",
    padding: "2%",
    backgroundColor: colors.green,
    borderRadius: 12.5,
    marginLeft: "5%",
  },
  messageButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },


  unfollowButtonHolder: {
    width: "42.5%",
    alignItems: "center",
    padding: "2%",
    backgroundColor: colors.white,
    borderRadius: 12.5,
    borderWidth: 1.5,
    borderColor: colors.green,
    marginLeft: "5%",
  },
  unfollowButtonText: {
    color: colors.green,
    fontSize: 16,
    fontWeight: "600"
  },


  followButtonHolder: {
    width: "42.5%",
    alignItems: "center",
    padding: "2%",
    backgroundColor: colors.green,
    borderRadius: 12.5,
    marginLeft: "5%"
  },
  followButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600"
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
    backgroundColor: colors.green,
  },
  notPost: {
    marginTop: "5%",
    textAlign: "center",
    marginBottom: 20,
    color: colors.white,
    fontWeight: "700",
    fontSize: 16
  },
  SeeProfileHeader: {
    backgroundColor: colors.white,
    width: "100%",
    paddingRight: "5%",
    paddingLeft: "2%",
    paddingTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameHolder: {
    flexDirection: "row",
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