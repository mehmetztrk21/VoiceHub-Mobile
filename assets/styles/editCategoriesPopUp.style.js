import { StyleSheet } from "react-native";
import colors from "../colors"
export default StyleSheet.create({  
    container: {
        width: "70%",
        alignSelf: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: colors.green,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    title: {
        color: colors.white, fontSize: 20, textAlign: "center", fontWeight: "600",
        marginVertical: 10,
    },
    input: {
        backgroundColor: "lightgray",
        borderRadius: 25,
        paddingHorizontal: 7.5,
        paddingVertical: 2.5,
        marginVertical: 10,
        width: "80%",
        marginLeft: "8%"
    },
    submit: {
        color: colors.green,
        fontSize: 16,
        textAlign: "center",
        fontWeight: "600",
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
    },
    

})