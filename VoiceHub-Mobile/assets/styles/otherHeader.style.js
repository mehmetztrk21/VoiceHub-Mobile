import { StyleSheet } from "react-native";

export default StyleSheet.create({
    wrapper: {
        position: "fixed",
        width: '100%',
        top: 0,
        zIndex: 999,
        backgroundColor: '#FFF',
    },
    aHeadView: {
        left: 0,
        height: 60,
        width: "100%",
        flexDirection: "row",
        borderBottomEndRadius:20,
        borderbottomStartRadius:20,
        paddingLeft:10,
    },
    BackButton: {
        paddingTop: 15,
    },
    headerName: {
        fontSize: 24,
        paddingTop: 13,
        paddingBottom: 13,
        marginLeft: 8,
        fontWeight: "600",
    },
})