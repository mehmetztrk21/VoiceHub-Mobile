import { StyleSheet } from "react-native";

export default StyleSheet.create({
  postContainer: {
    marginBottom: 20,
  },


  
  postUser: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginBottom:-40,
  },
  userpic: {
    width: 30,
    height: 30,
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: "black",
    marginRight: 10,
  },
  userpostImg: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
  },



  postimg: {
    width: 389,
    height: 389,
  },



  postActions: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    marginTop: 0,
    marginBottom: -30,
  },
  pactions: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  },



  textCounter: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
  },

  likesText: {
    fontWeight: "bold",
    fontSize: 14,
  },



  textHolder: {
    flex: 1,
    flexDirection: "row",
    marginTop: 0,
  },
  userCap: {
    fontWeight: "bold",
    fontSize: 14,
  },
  captext: {
    fontSize: 14,
  },


  
  commentUser: {
    marginTop:24,
    marginBottom: 10,
    //Add Comment View
  },
  userPostCommentImg:{
    height: 30,
    width: 30,
    borderRadius: 30,
  },

  timeAgo:{
    fontSize:10,
    marginBottom: 30,
  },
});