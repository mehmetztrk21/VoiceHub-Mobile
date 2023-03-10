import { StyleSheet } from "react-native";
import colors from "../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width:"100%"
  },


  actView: {
    flexDirection: "row",
    padding: 10,
    marginTop: 12,
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
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    alignItems:"center"
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
    alignSelf: "center"
  },


  scroll: {
    marginBottom: 65,
    width: "100%",
  },
  uploadMargin: {
    marginBottom: 120,
  },
  popUpMargin:{
    marginBottom: 140,
  },
  postView: {
    paddingTop: 5,
    flexDirection: "column",
    width: "100%",
  },
  leftTop: {
    width:"100%",
    flexDirection: "row",
    alignItems: "center",//yatay
    backgroundColor:colors.white,
  },
  BackButton:{
    paddingLeft: 10,
  },
  rightTop: {
    flexDirection: "row",
    alignItems: "center",//yatay
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
  },
});