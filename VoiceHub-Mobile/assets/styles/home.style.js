import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        backgroundColor: colors.white,
    },
    scroll: {
        backgroundColor: colors.white,
        width: "100%",
        marginTop: "25%",
        paddingBottom: "16%",
    },
    animScroll: {
        marginBottom: 120,
    },
});