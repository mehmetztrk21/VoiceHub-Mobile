import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


function LoginScreen(props) {

    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    function login() {
        if (username != "" && password != "") {
            console.log("go to main page");
            props.navigation.navigate('MainScreen');
        }
        else {
            console.log("Bos Birakmayiniz");
            //I read alert function 
        }

    }

    function register() {
        props.navigation.navigate('Register');
        console.log("Go to register page");
    }

    function forgot() {
        props.navigation.navigate('ForgotMyPassword');
        console.log("Go to forgot my password page");
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>

                <View style={styles.logo}>
                    <Image source={require("../assets/favicon.png")} style={{ width: 150, height: 150 }} />
                </View>

                <Text style={styles.Label}>User Name</Text>
                <TextInput style={styles.Inputs} value={username} onChangeText={username => setUserName(username)} />

                <Text style={styles.Label}>Password</Text>
                <TextInput style={styles.Inputs} keyboardType={'visible-password'} value={password} onChangeText={password => setPassword(password)} />


                <TouchableOpacity onPress={() => login()}>
                    <Text style={styles.ButtonText}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => register()}>
                    <Text style={styles.ButtonText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => forgot()}>
                    <Text style={styles.ForgotPasswordText}>Forgot Password</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
export default LoginScreen;

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
    ButtonText: {
        backgroundColor: '#ff6101',
        borderRadius: 10,
        color: 'aliceblue',
        textAlign: 'center',
        paddingBottom: '1.5%',
        paddingTop: '1.5%',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: '5%',
    },
    ForgotPasswordText: {
        color: '#ff6101',
        textAlign: 'center',
        paddingBottom: '1.5%',
        marginTop: '3%',
        fontSize: 16,
    }
});

