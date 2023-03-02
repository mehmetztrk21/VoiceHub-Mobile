import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        width:"100%",
        backgroundColor: colors.white,
    },
    scroll:{
        marginTop:"40%",
        marginBottom:50,
    },
    animScroll:{
        marginBottom:120,
    },
});