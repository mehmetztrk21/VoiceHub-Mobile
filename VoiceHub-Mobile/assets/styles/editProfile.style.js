import { StyleSheet } from "react-native";
import color from "../colors"
export default StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        backgroundColor: '#fff',
      },
      top:{

      },
      header:{
       fontWeight:"bold",
      },
      searchBar: {
        backgroundColor: "whitesmoke",
        borderRadius: 15,
        paddingVertical:"5%",
        paddingHorizontal:"5%",
        width: "90%",
      },
      ppView:{
        flexDirection:"column",
        alignItems:"center",
        borderBottomColor:"#DADADA",
        borderBottomWidth:1,
        marginTop:70,
        marginBottom:"2%",
        paddingBottom:"2%"
      },
      profilePhoto:{
        width:140,
        height:140,
        borderRadius:70,
      },
      editPhotoText:{
        color:color.green,
        fontSize:16,
        fontWeight:"700"
      },
      TextView:{
        alignItems:"center",
        marginTop:"2%"
      }
});