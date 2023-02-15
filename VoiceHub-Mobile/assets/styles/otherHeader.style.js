import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper: {
        position: "fixed",
        width: '100%',
        top: 0,
        zIndex: 999,
        backgroundColor: '#FFF'
    },
    aHeadView: {
        left: 0,
        height: 60,
        width: "100%",
        flexDirection: "row",
        borderBottomColor: '#DADADA',
        borderBottomWidth: 1,
    },
    BackButton: {
        paddingTop: 15,
    },
    headerName: {
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 8,
        fontWeight: "bold",
    },
})