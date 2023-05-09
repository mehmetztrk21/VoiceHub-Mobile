import { Audio } from "expo-av";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";

import React, { useEffect, useState } from "react";
import { Dimensions, Image, Modal, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Icon } from "react-native-elements";

import colors from "../assets/colors";
import holoGif from "../assets/images/holo.gif";

import AreYouSure from "./components/areYouSure";
import PopUp from "./components/ProfileBottomPopUp";

import { createPost } from "../services/postServices";

import { recordingOptions } from "../utils/recordingOptions";
import { timeFormatText } from "../utils/timeFormatText";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function Upload({ navigation }) {

    const [visiblePopUp, setVisiblePopUp] = useState(false);
    const [openAreYouSure, setOpenAreYouSure] = useState(false);
    const [categories, setCategories] = useState("");

    const [openReadCategory, setOpenReadCategory] = useState(false);

    const [isRunning, setIsRunning] = useState(false);
    const [recording, setRecording] = useState(null);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    useEffect(() => {
        setVisiblePopUp(false);
    }, [])

    const toggleRecord = async () => {
        const filename = "test.mp3";
        const path = `${FileSystem.documentDirectory}${filename}`;

        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);

        if (status !== "granted") {
            console.log("Missing audio recording permissions");
            return;
        }

        const { status: existingStatus } = await Audio.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== "granted") {
            const { status } = await Audio.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== "granted") {
            console.log("Missing audio recording permissions");
            return;
        }

        try {
            if (isRunning == true) {
                setIsRunning(false);
                if (seconds < 1) {
                    alert("You recorded voice must be longer 1 seconds.");
                }
                else {
                    if (recording) {
                        await recording.stopAndUnloadAsync();

                        console.log(recording)
                        setOpenReadCategory(true);
                        console.log("Recording stopped");
                    } else {
                        console.log("Recording is not prepared");
                    }
                }
            }
            else {
                setOpenReadCategory(false);
                setIsRunning(true);
                if (recording) {
                    console.log("Recording already exists");
                } else {
                    const newRecording = new Audio.Recording();
                    await newRecording.prepareToRecordAsync(recordingOptions);
                    await newRecording.startAsync();
                    setRecording(newRecording);
                    console.log("Recording started");
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const pickFile = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({ type: "audio/*", copyToCacheDirectory: true });
            if (result !== "cancel") {
                setOpenReadCategory(true);
                setRecording(result);
            }
        } catch (err) {
            console.log("pick error", err)
        }
    };


    const save = async () => {
        let uri = recording;//create uri variable

        //recording.uri for pick files
        if (recording.uri) {
            uri = recording.uri;//pick file's uri
        }

        //recording.getURI() for recording voices
        else {
            uri = recording.getURI();//recording voice's uri
        }

        const info = await FileSystem.getInfoAsync(uri);
        const formData = new FormData();  //dosya ile veri göndermek için

        formData.append("content", {
            uri: info.uri,
            name: `recording-${Date.now()}.mpeg`,
            type: "audio/mpeg",
        });
        if (categories.length > 0) {
            let temp = categories?.split("#");
            for (const tag of temp) {
                if (tag.trim().length > 0) {
                    formData.append("categories", tag.trim());
                }
            }
        }


        const response = await createPost(formData);
        setRecording(new Audio.Recording());
        console.log("Post loaded");

        handleReset();

    }

    const handleReset = () => {
        console.log("Timer Reseted");
        console.log("Sound Reseted");

        setOpenReadCategory(false);
        setRecording(null);
        setSeconds(0);
        setCategories("");
        setIsRunning(false);
    };

    return (
        <SafeAreaView style={{
            flex: 1, width: width, flexDirection: "column",
            alignItems: "center", backgroundColor: colors.green,
        }}>

            <Modal
                visible={visiblePopUp}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    setVisiblePopUp(false)
                }}>
                <PopUp navigation={navigation} setOpenAreYouSure={setOpenAreYouSure}
                    setVisiblePopUp={setVisiblePopUp} />
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={openAreYouSure}
                onRequestClose={() => {
                    setOpenAreYouSure(false);
                }}
            >
                <AreYouSure process={"LogOut"} navigation={navigation}
                    setOpenAreYouSure={setOpenAreYouSure} />
            </Modal>

            {/* SES KAYDEDERKEN ANIMASYON OLACAK */}
            <Image source={holoGif}
                style={{ marginTop: height * 0.1, marginBottom: height * 0.1, width: height * 0.3, height: height * 0.3, }}
                borderRadius={height * 0.15} />

            {/* Seconds, Minutes and Hours */}

            <Text style={{ textAlign: "center", fontSize: height * 0.05, fontWeight: "900", color: colors.white, marginBottom: height * 0.1, }}>
                {timeFormatText(seconds)}
            </Text>

            {openReadCategory ? (
                <View style={{ width: width, flexDirection: "column" }}>
                    <Text style={{
                        fontSize: 18, marginLeft: width * 0.05, fontWeight: "700",
                        color: colors.white, marginBottom: width * 0.02,
                    }}>Read Categories</Text>
                    <TextInput
                        style={{
                            backgroundColor: colors.white,
                            borderRadius: 12.5,
                            paddingVertical: width * 0.02,
                            paddingHorizontal: width * 0.02,
                            width: width * 0.9,
                            marginLeft: width * 0.05,
                            marginBottom: width * 0.05,
                        }}
                        value={categories}
                        onChangeText={(categories) => setCategories(categories)}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity onPress={handleReset}
                            style={{
                                width: width * 0.2, height: width * 0.2,
                                borderRadius: width * 0.1, borderWidth: 7, borderColor: colors.tealGreen,
                                backgroundColor: colors.white, justifyContent: "center",
                            }}>
                            <Icon type={"font-awesome"} name={"trash"} size={width * 0.12} color={colors.green} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={save}
                            style={{
                                width: width * 0.2, height: width * 0.2,
                                borderRadius: width * 0.1, borderWidth: 7, borderColor: colors.tealGreen,
                                backgroundColor: colors.white, justifyContent: "center",
                            }}>
                            <Icon type={"font-awesome"} name={"check"} size={width * 0.12} color={colors.green} />
                        </TouchableOpacity>
                    </View>
                </View>
            ) :
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={pickFile}
                        style={{
                            width: width * 0.24, height: width * 0.24,
                            borderRadius: width * 0.12, borderWidth: 7, borderColor: colors.tealGreen,
                            backgroundColor: colors.white, justifyContent: "center", marginRight: width * 0.06
                        }}>
                        <Icon type={"font-awesome"} name={"folder"} size={50} color={colors.green} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={toggleRecord}
                        style={{
                            width: width * 0.24, height: width * 0.24,
                            borderRadius: width * 0.12, borderWidth: 7, borderColor: colors.tealGreen,
                            backgroundColor: colors.white, justifyContent: "center", marginLeft: width * 0.06
                        }}>
                        <Icon type={"font-awesome"} name={"microphone"} size={50} color={colors.green} />
                    </TouchableOpacity>
                </View>
            }
        </SafeAreaView>
    );
}
