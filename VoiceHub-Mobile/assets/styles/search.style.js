import { StyleSheet } from "react-native";
import colors from "../colors";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBarHolder: {
    marginTop:65,
    width: "100%",
    justifyContent: "center",
    paddingVertical:20,
  },

  searchBar: {
    backgroundColor: colors.lightgray,
    borderRadius: 22.5,
    paddingVertical:10,
    paddingHorizontal:12.5,
  },
  widthChange2:{
    width:"87.5%",
    marginLeft:"6.25%"
  },
  widthChange1:{
    width:"80%",
    marginLeft:"6.25%"
  },
  scrollContainer: {
    backgroundColor: colors.white,
    width: "95%",
    marginBottom:65,
  },
  closeButtonTouch:{
    justifyContent:"center",
    marginLeft:"1%"
  },
  SecondText:{
    color:colors.white, 
    fontWeight:"500", 
    paddingVertical:10, 
    borderRadius:20, 
    fontSize:16,
    textAlign:"center",
    
},
});
