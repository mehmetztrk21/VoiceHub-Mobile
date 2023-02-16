import { StyleSheet } from "react-native";
import colors from "../colors"
export default StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        justifyContent:"center"
    },
    label: {
        marginBottom: "0.5%",
        marginLeft:"8%",
        fontWeight:"500",
        fontSize:16,
    },
    sbar: {
        backgroundColor: "lightgray",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: "2%",
        width: "80%",
        marginLeft:"8%"
    },
    touch: {
        width: "55%",
        marginBottom: "2.5%",
        marginTop: "2.5%",
        marginLeft:"22.5%"
    },
    registerButton: {
        borderRadius: 10,
        backgroundColor: colors.green,
        color: colors.white,
        textAlign: "center",
        paddingVertical: "1.5%",
        fontWeight:"500",
        fontSize:16,
    },
    textButton: {
        color: colors.green,
        textAlign: "center",
    },
});