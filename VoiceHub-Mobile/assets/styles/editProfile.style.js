import { StyleSheet } from "react-native";
import color from "../colors"
export default StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        backgroundColor: '#fff',
      },
      searchBar: {
        backgroundColor: "whitesmoke",
        borderRadius: 15,
        paddingVertical:"2.5%",
        paddingHorizontal:"2.5%",
        width: "80%",
        marginHorizontal:"10%"
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
      saveButtonText:{
        color:color.white,
        fontSize:26,
        fontWeight:"750",
        width:"40%",
        padding:5,
        marginLeft:"30%",
        borderRadius:26,
        marginTop:"10%"
      },
      TextView:{
        marginTop:"2%"
      },
      label:{
        marginHorizontal:"10%",
      }
});