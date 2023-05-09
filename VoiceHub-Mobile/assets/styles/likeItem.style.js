import { StyleSheet } from "react-native";
export default StyleSheet.create({
    item: {
        paddingBottom: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    seeProfile: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: "2%",
    },
    username: {
        marginLeft: "4%",
        marginRight: "3%",
        fontWeight: "700",
        fontSize: 16,

    },
})