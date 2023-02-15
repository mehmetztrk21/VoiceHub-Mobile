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
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: '#DADADA',
        borderBottomWidth: 1,
    },
    headerName: {
        fontSize: 22,
        padding: 20,
        paddingRight: 8,
        fontWeight: "bold",
    },
})