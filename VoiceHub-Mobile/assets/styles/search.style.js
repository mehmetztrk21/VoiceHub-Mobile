import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBarHolder: {
    top: 0,
    left: 0,
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  searchBar: {
    backgroundColor: "lightgray",
    borderRadius: 15,
    paddingVertical:10,
    paddingHorizontal:12.5,
    width: "90%",
  },

  scrollContainer: {
    backgroundColor: "white",
    width: "92%",
  },
  last:{
    paddingBottom: 20,
  },
  lastSearchImage:{
    width: 50, 
    height: 50, 
    borderRadius:25, 
    marginRight:"1%",
  },
  searchImg:{
    width: 50, 
    height: 50,
    borderRadius:25, 
    marginLeft:"10%", 
    marginRight:"5%",
  },
  slider:{
    width:"60%",
  },
});
