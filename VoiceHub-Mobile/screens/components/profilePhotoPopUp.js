import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'


import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

import { updateUserInfo, removeUserFiles } from "../../services/userServices"

import colors from '../../assets/colors'
import profilePhotoPopUpStyle from '../../assets/styles/bioVoicePopUp.style'

const ProfilePhotoPopUp = ({ setOpenProfilePhotoPopUp }) => {
    const [image, setImage] = useState(null);

    const deletePhoto = async () => {
        await removeUserFiles({ type: "profilePhoto" })
        //continue
        setOpenProfilePhotoPopUp(false);
    }

    const pickImage = async () => {

        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            save();
        }
    };

    const save = async () => {
        console.log("save geldi");
        const formData = new FormData();
        const info = await FileSystem.getInfoAsync(image);
        formData.append('profilePhoto', {
            uri: info.uri,
            type: 'image/png', // ya da 'image/png'
            name: 'profilePhoto.png',
        });

        const response = await updateUserInfo(formData)
        if (response && response.success) {
            console.log(response)
        }
        else {
            console.log("hata")
        }

        setOpenProfilePhotoPopUp(false);
    }

    return (
        <View style={profilePhotoPopUpStyle.container}>
            <View style={profilePhotoPopUpStyle.container2}>

                <TouchableOpacity onPress={pickImage}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <Icon size={20} type={"font-awesome"} name={"folder"} color={colors.white} />
                    <Text style={profilePhotoPopUpStyle.button}>Choose Photo</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { console.log("fotoğraf çekimi yapılacak"); setOpenProfilePhotoPopUp(false); }}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <Icon size={20} type={"font-awesome"} name={"camera"} color={colors.white} />
                    <Text style={profilePhotoPopUpStyle.button}>Take a Photo</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => deletePhoto()}
                    style={{ flexDirection: "row", alignItems: "center", }}>
                    <Icon size={20} type={"font-awesome"} name={"trash"} color={colors.white} />
                    <Text style={profilePhotoPopUpStyle.button}>Remove Photo</Text>
                </TouchableOpacity>

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