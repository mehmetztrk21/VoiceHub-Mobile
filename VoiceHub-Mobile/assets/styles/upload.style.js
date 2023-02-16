import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
  },
  contents: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: "5%",
    paddingLeft: 10,
    paddingTop: 65,
    justifyContent: "space-between",
  },
  content: {
    justifyContent: "center", 
    flexDirection: "row", 
    paddingLeft: '10%', 
    paddingRight: '2.5%', 
    width: "100%", 
    alignItems: "center",
  },
  time: {
    fontSize: 15,
    marginRight: 10,
    fontWeight: "700",
  },

});