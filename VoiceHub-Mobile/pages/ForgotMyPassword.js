import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import * as React from 'react';

function ForgotMyPassword() {
    const [code, setVerificationCode] = React.useState("");

    function press(){
        
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <Image source={require("../assets/favicon.png")} style={{ width: 150, height: 150 }} />
                </View>

                <Text style={styles.Label}>E-Mail Verification Code</Text>
                <TextInput style={styles.Inputs} value={code} onChangeText={code => setVerificationCode(code)} />

                <TouchableOpacity onPress={() => press()}>
                    <Text style={styles.ForgotPasswordText}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ForgotMyPassword;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        flex: 1,

    },
    content: {
        backgroundColor: '#313131',
        flex: 1,
        margin: "2%",
        padding: "12.5%"
    },
    logo: {
        textAlignVertical: 'center',
        marginBottom: '30%',
        marginTop: '20%',
        alignItems: 'center'
    },
    Label: {
        color: '#ff6101',
        fontWeight: 'bold',
        fontSize: 16,
    },
    Inputs: {
        borderColor: '#ff6101',
        color: '#ff6101',
        fontSize: 16,
        borderWidth: 3,
        borderRadius: 10,
        marginBottom: '5%',
        paddingBottom: '1.5%',
        paddingTop: '1.5%',
        paddingLeft: '3%',
    },
});