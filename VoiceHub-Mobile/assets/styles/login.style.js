import { StyleSheet } from "react-native";
import colors from "../colors"
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo: {
        width: 192,
        height:108,

    },
    label: {
        marginBottom: "1%",
    },
    sbar: {
        backgroundColor: "lightgray",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12.5,
        width: "80%",
    },
    touch: {
        width: "60%",
        marginVertical: "2.5%",
    },
    loginButton: {
        borderRadius: 10,
        backgroundColor: colors.green,
        color: colors.white,
        textAlign: "center",
        paddingVertical: "1.5%",
        fontSize: 16,
        
    },
    textButton: {
        color: colors.green,
        textAlign: "center",
    },
});