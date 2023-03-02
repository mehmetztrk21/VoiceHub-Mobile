import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper: {
        position: "fixed",
        width: '100%',
        top: 0,
        zIndex: 999,
        backgroundColor: '#FFF'
      },
      header: {
        left: 0,
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",//yatay
      },
      headerName: {
        fontSize: 22,
        padding: 20,
        paddingRight: 8,
        paddingLeft: 10,
        fontWeight: "bold",
      },
})