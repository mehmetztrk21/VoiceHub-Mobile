import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

//import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import registerProfilePhotoPopUpStyle from "../../assets/styles/registerProfilePhotoPopUp.style"
import colors from "../../assets/colors";

const registerProfilePhotoPopUp = ({ setOpenRegisterProfilePhotoPopUp }) => {
    const [image, setImage] = useState(null);

    const takeImage = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        if (status === "granted") {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [2, 2],
                quality: 1,
            });


            if (!result.cancelled) {
                setImage(result.uri);
                save(result.uri);
            }
        } else {
            throw new Error("Camera permission not granted");
        }
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
        }
    };

    return (
        <View style={registerProfilePhotoPopUpStyle.container}>
            <View style={registerProfilePhotoPopUpStyle.container2}>

                <TouchableOpacity onPress={pickImage}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <Icon size={20} type={"font-awesome"} name={"folder"} color={colors.white} />
                    <Text style={registerProfilePhotoPopUpStyle.button}>Choose Photo</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={takeImage}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <Icon size={20} type={"font-awesome"} name={"camera"} color={colors.white} />
                    <Text style={registerProfilePhotoPopUpStyle.button}>Take a Photo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setOpenRegisterProfilePhotoPopUp(false) }}>
                    <Text style={registerProfilePhotoPopUpStyle.close}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default registerProfilePhotoPopUp