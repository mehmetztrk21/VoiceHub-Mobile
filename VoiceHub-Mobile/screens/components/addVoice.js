import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

import colors from "../../assets/colors";
import recGif from "../../assets/images/rec.gif";
import waweGif from "../../assets/images/record.gif";
import addVoiceStyle from "../../assets/styles/addVoice.style";

import { createComment } from "../../services/commentServices";
import { recordingOptions } from '../../utils/recordingOptions';
import { timeFormatText } from "../../utils/timeFormatText";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddVoice({ navigation, title, postId, setIsAddVoice, setOpenAddVoice }) {
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

  const toggleRecord = async () => {
    const filename = 'test.mp3';
    const path = `${FileSystem.documentDirectory}${filename}`;

    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);

    if (status !== 'granted') {
      console.log('Missing audio recording permissions');
      return;
    }

    const { status: existingStatus } = await Audio.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Audio.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.log('Missing audio recording permissions');
      return;
    }

    try {
      if (isRunning == true) {
        setIsRunning(false);
        if (recording) {
          await recording.stopAndUnloadAsync();
          console.log('Recording stopped');
          if (seconds < 1) {
            alert("You recorded voice must be longer 1 seconds.");
          }
          else {
            save();
          }
        } else {
          console.log('Recording is not prepared');
        }
      }
      else {
        setIsRunning(true);
        if (recording) {
          console.log('Recording already exists');
        } else {
          const newRecording = new Audio.Recording();
          await newRecording.prepareToRecordAsync(recordingOptions);
          await newRecording.startAsync();
          setRecording(newRecording);
          console.log('Recording started');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const save = async () => {
    const uri = recording.getURI();
    const info = await FileSystem.getInfoAsync(uri);

    const formData = new FormData();  //dosya ile veri göndermk için

    if (title == "messages") {
      formData.append('message', {
        uri: info.uri,
        name: `recording-${Date.now()}.mpeg`,
        type: 'audio/mpeg',
      });

      const res = await createPost(formData);
      if (res?.message == "Unauthorized") {
        await AsyncStorage.clear();
        navigation.navigate("Login");
      }
    }

    else if (title == "comments") {
      formData.append('comment', {
        uri: info.uri,
        name: `recording-${Date.now()}.mpeg`,
        type: 'audio/mpeg',
      });

      formData.append("postId", postId);

      const res = await createComment(formData);
      if (res?.message == "Unauthorized") {
        await AsyncStorage.clear();
        navigation.navigate("Login");
      }
    }

    else if (title == "bio") {
      setOpenAddVoice(false)
      setIsAddVoice(info);
    }
    else {
      console.error("type not found")
    }


    setRecording(new Audio.Recording());
    console.log("Post loaded");
    handleReset();
  }

  const handleReset = () => {
    console.log("Timer Reseted");
    console.log("Sound Reseted");

    setRecording(null);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <View style={addVoiceStyle.wrapper}>

      <View style={addVoiceStyle.container}>
        <View style={addVoiceStyle.content}>
          {isRunning == true ? (
            <Image
              source={recGif}
              style={addVoiceStyle.gifStyle} />
          ) : null}

          <Text style={addVoiceStyle.time}>{timeFormatText(seconds)}</Text>

          {isRunning == true ? (
            <Image
              source={waweGif}
              style={addVoiceStyle.gifStyle} />
          ) : null}
        </View>

        <TouchableOpacity style={addVoiceStyle.touch} onPress={toggleRecord}>
          <Icon type="feather" size={28} name={"mic"} color={colors.white} />
        </TouchableOpacity>
      </View>

    </View>
  )
}