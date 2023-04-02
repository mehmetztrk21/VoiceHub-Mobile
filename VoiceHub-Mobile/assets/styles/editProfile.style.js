import { StyleSheet } from "react-native";
import colors from "../colors"
export default StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        backgroundColor: colors.white,
      },
      searchBar: {
        backgroundColor: colors.lightgray,
        borderRadius: 15,
        paddingVertical:"2.5%",
        paddingHorizontal:"2.5%",
        width: "80%",
        marginHorizontal:"10%"
      },
      ppView:{
        flexDirection:"column",
        alignItems:"center",
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
        color:colors.green,
        fontSize:16,
        fontWeight:"700"
      },
      saveButtonText:{
        color:colors.white,
        fontSize:26,
        fontWeight:"700",
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