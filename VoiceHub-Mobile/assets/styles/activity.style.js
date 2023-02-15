import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  actView: {
    flexDirection: "row",
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 10,
    alignItems: "center",
    paddingLeft: 15,
  },

  userPic: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginLeft: 4,
    marginRight: 10,
    marginVertical: 2,
  },

  actText: {
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    paddingLeft:10,
    
  },

  headerName: {
    fontSize: 22,
    padding: 20,
    paddingLeft: 5,
    fontWeight: "bold",
  },

  sContainer: {
    backgroundColor: "white",
    width: "95%",
    paddingTop:60,
    paddingBottom:60,
  },
});