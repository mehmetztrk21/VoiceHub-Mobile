import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  aHeadView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 90,
    width: "90%",
    marginTop: 22,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",//yatay
  },
  leftTop:{
    flexDirection:"row",
    alignItems: "center",//yatay
  },
  rightTop:{
    flexDirection:"row",
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
  pactions: {
    paddingRight: 15,
  },
  profileScroll: {
    marginTop: 100,
    width: "100%",
  },

  actView: {
    flexDirection: "row",
    padding: 10,
    marginTop: 12,
    top: 0,
    left: 5,
    width: "95%",
  },

  userPic: {
    width: 90,
    height: 90,
    borderRadius: 50,
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
  bioCont: {
    width: "90%",
    padding: 10,
    paddingLeft: "5%",
    paddingTop: "3%",
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
  },

  catg: {
    color: "grey",
  },
  btnHolder: {
    marginBottom: "2%",
    marginTop: "1%",
  },


  follow: {
    backgroundColor: "#0095f6",
    borderRadius: 5,
    width: "85%",
    marginLeft: "7.5%",
    paddingTop: "2%",
    paddingBottom: "2%",

  },
  msg: {
    backgroundColor: "white",
    paddingLeft: 30,
    paddingVertical: 7,

    borderRadius: 5,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "black",
  },
  btnTextF: {
    fontSize: 16,
    color: "white",
    paddingLeft: "42.5%",
  },

  btnTextM: {
    fontSize: 15,
  },

  iconCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    backgroundColor: "whitesmoke",
    marginTop: 30,
    paddingVertical: 8,
  },

  icons: {
    marginHorizontal: 50,
  },

  postView: {
    backgroundColor: "white",
    paddingTop: 5,
    flexDirection: "column",
    width: "100%",
  },
  
});