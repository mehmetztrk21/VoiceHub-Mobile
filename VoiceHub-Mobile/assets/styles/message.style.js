import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:"100%"
  },
  header:{
    flexDirection:"row",
    paddingLeft:10,
  },
  headerName: {
    fontWeight: "bold",
    fontSize: 22,
    paddingLeft:10,
  },
  searchView: {
    marginLeft: "10%",
    marginVertical: "2%",
  },
  SearchBar: {

    paddingVertical: 10,
    paddingHorizontal: 12.5,
    width: "80%",
    backgroundColor: "#AAADAA",
    borderRadius: 15,
  },
  Items: {
    flexDirection: "row",
  },

});