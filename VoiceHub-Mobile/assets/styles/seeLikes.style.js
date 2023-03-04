import { StyleSheet } from "react-native";
import color from "../colors"
export default StyleSheet.create({
    container:{
        flex:1,
      },
      searchBarHolder: {
        top: 50,
        left: 0,
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:20,
      },
      searchBar: {
        backgroundColor: "lightgray",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12.5,
        width: "90%",
      },
      scroll:{
        paddingHorizontal: "7.5%",
        paddingTop: "5%",
      },
      item: {
        paddingBottom: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
      },
      seeProfile:{
        flexDirection: "row", 
        alignItems: "center",
      },
      profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: "2%",
      },
      userName:{
        marginLeft:"2%"
      },
      FollowButton: {
        backgroundColor: color.green,
        borderRadius: 25,
        color: color.white,
        fontSize: 16,
        fontWeight: "500",
        paddingVertical: "3.3%",
        paddingHorizontal: "10%",
        textAlign:"center",
        textAlignVertical:"center",
      }
})