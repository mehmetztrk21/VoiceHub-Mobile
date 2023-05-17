import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from "react";
import { Image, Modal, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../assets/colors";
import registerStyle from "../assets/styles/register.style";
import RegisterProfilePhotoPopUp from "../screens/components/registerProfilePhotoPopUp";
import { login, register } from "../services/authServices";
import { registerCondition } from "../utils/registerCondition";
import { useUser } from "../utils/userContext";
import AwesomeAlert from 'react-native-awesome-alerts';

export default function Register({ navigation }) {
    const { user, setUser } = useUser()
    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [phone, setPhone] = useState("");

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [openRegisterProfilePhotoPopUp, setOpenRegisterProfilePhotoPopUp] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    let isGoHomePage = false

    const isRegister = async () => {
        isGoHomePage = registerCondition(firstName, lastName, username, email, password1, password2, setShowAlert, setAlertMessage);
        if (isGoHomePage) {
            const formData = new FormData();

            formData.append("username", username);
            formData.append("password", password1);
            formData.append("email", email);
            formData.append("name", firstName);
            formData.append("surname", lastName);
            formData.append("phone", phone);
            formData.append("isSecretAccount", false);

            const response1 = await register(formData)

            if (response1 && response1.success) {
                const response2 = await login({ username: username, password: password1 })
                if (response2 && response2.success) {
                    await AsyncStorage.setItem('token', response2.data.accessToken)
                    await AsyncStorage.setItem('user', JSON.stringify(response2.data.user))
                    setUser(response2.data.user);
                    navigation.navigate("HomeScreen")
                }
                else {
                    setAlertMessage("Username already exists")
                    setShowAlert(true)
                }
            }
            else {
                setAlertMessage("Username already exists")
                setShowAlert(true)
            }
        }
    }

    return (
        <KeyboardAvoidingView style={registerStyle.container}>

            <Modal
                visible={openRegisterProfilePhotoPopUp}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    setOpenRegisterProfilePhotoPopUp(false)
                }}>
                <RegisterProfilePhotoPopUp setOpenRegisterProfilePhotoPopUp={setOpenRegisterProfilePhotoPopUp} />
            </Modal>

            <View style={registerStyle.logoView}>
                <Image source={require("../assets/images/VoiceHub-1.png")} style={registerStyle.logo} />
            </View>

            <Text style={registerStyle.label}>Name</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={24}
                value={firstName}
                onChangeText={firstName => setName(firstName)}
            />

            <Text style={registerStyle.label}>Last Name</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={18}
                value={lastName}
                onChangeText={lastName => setLastName(lastName)}
            />

            <Text style={registerStyle.label}>User Name</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={18}
                value={username}
                onChangeText={username => setUsername(username)}
            />

            <Text style={registerStyle.label}>Email</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={36}
                value={email}
                onChangeText={email => setEmail(email)}
                keyboardType='email-address'
            />

            <Text style={registerStyle.label}>Phone</Text>
            <TextInput
                style={registerStyle.sbar}
                maxLength={20}
                value={phone}
                onChangeText={phone => setPhone(phone)}
                keyboardType='phone-pad'
            />

            <Text style={registerStyle.label}>Password</Text>
            <View style={registerStyle.passwordbar}>
                <TextInput
                    style={{ width: "80%" }}
                    maxLength={18}
                    value={password1}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={password1 => setPassword1(password1)}
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={handlePasswordVisibility}>
                    <Icon type="font-awesome" size={20} name={isPasswordVisible ? "eye" : "eye-slash"} color={colors.green} />
                </TouchableOpacity>
            </View>

            <Text style={registerStyle.label}>Password Repeat</Text>
            <TextInput
                style={registerStyle.passwordbar}
                maxLength={18}
                value={password2}
                secureTextEntry={!isPasswordVisible}
                onChangeText={password2 => setPassword2(password2)}
                autoCapitalize="none"
            />

            <TouchableOpacity style={registerStyle.touch} onPress={() => isRegister()}>
                <Text style={registerStyle.registerButton}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={registerStyle.touch} onPress={() => navigation.goBack()}>
                <Text style={registerStyle.textButton}>Do you have accont? Go Log in</Text>
            </TouchableOpacity>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                message={alertMessage}
                messageStyle={{
                    fontSize: 15,
                    fontWeight: "500"
                }}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Okay"
                confirmButtonTextStyle={{ textAlign: "center", fontWeight: "600", fontSize: 16 }}
                confirmButtonStyle={{
                    backgroundColor: colors.green,
                    borderRadius: 30,
                    width: "50%",
                    marginTop: "5%",
                }}
                contentContainerStyle={{ borderRadius: 20 }}
                onConfirmPressed={() => {
                    setShowAlert(false)
                }}
                onDismiss={() => setShowAlert(false)}
            />

        </KeyboardAvoidingView>
    );
}