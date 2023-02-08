import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  sbarHolder: {
    top: 0,
    left: 0,
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  sbar: {
    backgroundColor: "whitesmoke",
    borderRadius: 15,
    width: "90%",
  },

  sContainer: {
    backgroundColor: "white",
    width: "92%",
  },

  Shead: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
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
  userHodler: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
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
