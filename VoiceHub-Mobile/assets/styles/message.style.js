import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:"100%",
  },
  searchView: {
    width: "85%",
    marginLeft: "7.5%",
    marginTop: 70,
    marginBottom:'2%',
  },
  SearchBar: {
    paddingVertical: 10,
    paddingHorizontal: 12.5,
    backgroundColor: "lightgray",
    borderRadius: 15,
  },
  Items: {
    flexDirection: "column",
    marginLeft:"7.5%",
    marginRight:"7.5%",
    width:"100%"
  },
});