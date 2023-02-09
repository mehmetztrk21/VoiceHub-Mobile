import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    head: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft:10,
        paddingRight:20,
        flexDirection: "row",
        justifyContent:"space-between",
        borderBottomWidth:0.5,
        borderBottomColor:"#DADADA",
    },
    headText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    
    pactions:{
        paddingRight:15,
    },
    rightTop:{
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    post:{
        marginLeft:"1.5%",
    }
});