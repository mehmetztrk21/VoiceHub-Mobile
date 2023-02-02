import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


function Register(props) {
    const [yourName, setName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [username, setUserName] = React.useState("");
    const [password1, setPassword1] = React.useState("");
    const [password2, setPassword2] = React.useState("");

    function RegisterNow(){
        if (yourName != "" && lastName!="" && username != "" && password1 != "" && password2!="") {
            if(password1==password2){
                if(password1.length>=8){
                    console.log("go to main page");
                    props.navigation.navigate('MainScreen');
                }
                else{
                    console.log("Şifreniz Çok Kısa!");
                }
            }
            else{
                console.log("Şifreler Uyuşmuyor!");
            }
        }
        else {
            console.log("Bos Birakmayiniz!");
            //I read alert function 
        }
    }
return (
    <SafeAreaView style={styles.container}>

        <View style={styles.content}>

            <Text style={styles.Label}>Name</Text>
            <TextInput style={styles.Inputs} value={yourName} onChangeText={yourName => setName(yourName)} />

            <Text style={styles.Label}>Last Name</Text>
            <TextInput style={styles.Inputs} value={lastName} onChangeText={lastName => setLastName(lastName)} />

            <Text style={styles.Label}>User Name</Text>
            <TextInput style={styles.Inputs} value={username} onChangeText={username => setUserName(username)} />

            <Text style={styles.Label}>Password</Text>
            <TextInput style={styles.Inputs} keyboardType={'visible-password'} value={password1} onChangeText={password1 => setPassword1(password1)} />
            
            <Text style={styles.Label}>Password Repeat</Text>
            <TextInput style={styles.Inputs} keyboardType={'visible-password'} value={password2} onChangeText={password2 => setPassword2(password2)} />


            <TouchableOpacity onPress={() => RegisterNow()}>
                <Text style={styles.ButtonText}>RegisterNow</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
);
}
export default Register;

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
