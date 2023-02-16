import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    header: {
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingVertical:'2%',
        position:'fixed',
        backgroundColor:'#FFF',
        width:'100%',
    },
    headerName: {
        fontSize: 22,
        fontWeight: '700',
        paddingLeft: 10,
    },
    comments: {
        paddingTop:56,
        paddingBottom:66,
        width:'100%',
        paddingLeft:'2%'
    },
    userVoiceRecord: {
        bottom: 0,
        flexDirection: "row",
        position:'fixed',
        backgroundColor:'#FFF',
        width:'100%',
        paddingHorizontal:'5%',
        paddingVertical:'2%',
        
    },
    userPic: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
});