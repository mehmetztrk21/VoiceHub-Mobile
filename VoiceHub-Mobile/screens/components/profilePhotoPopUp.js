import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { getUserById, removeUserFiles } from "../../services/userServices";

import { useUser } from '../../utils/userContext';
import * as FileSystem from 'expo-file-system';
import { updateUserInfo } from "../../services/userServices";

import colors from '../../assets/colors';
import profilePhotoPopUpStyle from '../../assets/styles/profilePhotoPopUp.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfilePhotoPopUp = ({ navigation, setOpenProfilePhotoPopUp, setImage, title }) => {

    const { user, setUser } = useUser();

    const deletePhoto = async () => {
        await removeUserFiles({ type: "profilePhoto" });

        getUserById({ id: user?._id }).then(async (res) => {
            setUser(res?.data);
            await AsyncStorage.setItem("user", JSON.stringify(res?.data));
        }).catch((err) => {
            console.log(err);
        })

        setImage(null);
        setOpenProfilePhotoPopUp(false);
    }

    const takeImage = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        if (status === 'granted') {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [2, 2],
                quality: 1,
            });

            if (!result.cancelled) {
                setImage(res.uri);
                if (title == "ProfileScreen") {
                    save(res.uri);
                }
                setOpenProfilePhotoPopUp(false);
            }
        } else {
            throw new Error('Camera permission not granted');
        }
    }

    const save = async (uri) => {
        const formData = new FormData();
        const info = await FileSystem.getInfoAsync((uri) ? uri : user?.profilePhotoUrl);
        if (uri) {
            formData.append("profilePhoto", {
                uri: info.uri,
                type: 'image/jpeg', // ya da 'image/png'
                name: 'profilePhoto.jpeg',
            });
        }
        const response = await updateUserInfo(formData);

        if (response && response.success) {
            getUserById({ id: user?._id }).then(async (res) => {
                if (res?.message == "Unauthorized") {
                    await AsyncStorage.clear();
                    navigation.navigate("Login");
                }
                else {
                    setUser(res?.data);
                    await AsyncStorage.setItem("user", JSON.stringify(res?.data));
                }
                
            }).catch((err) => {
                console.log(err);
            })
        }

        setOpenProfilePhotoPopUp(false);
    }

    const pickImage = async () => {

        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        }).then((res) => {
            if (!res.cancelled) {
                setImage(res.uri);
                if (title == "ProfileScreen") {
                    save(res.uri);
                }
                setOpenProfilePhotoPopUp(false);
            }
        });

    };

    return (
        <View style={profilePhotoPopUpStyle.container}>
            <View style={profilePhotoPopUpStyle.container2}>

                <TouchableOpacity onPress={pickImage}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <Icon size={20} type={"font-awesome"} name={"folder"} color={colors.white} />
                    <Text style={profilePhotoPopUpStyle.button}>Choose Photo</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={takeImage}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <Icon size={20} type={"font-awesome"} name={"camera"} color={colors.white} />
                    <Text style={profilePhotoPopUpStyle.button}>Take a Photo</Text>
                </TouchableOpacity>

                {user?.profilePhotoUrl ? <TouchableOpacity onPress={() => deletePhoto()}
                    style={{ flexDirection: "row", alignItems: "center", }}>
                    <Icon size={20} type={"font-awesome"} name={"trash"} color={colors.white} />
                    <Text style={profilePhotoPopUpStyle.button}>Remove Photo</Text>
                </TouchableOpacity> : null}

                <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setOpenProfilePhotoPopUp(false) }}>
                    <Text style={{
                        color: colors.green, fontSize: 16, textAlign: "center", fontWeight: "600",
                        backgroundColor: colors.white, padding: 10, borderRadius: 10,
                    }}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfilePhotoPopUp