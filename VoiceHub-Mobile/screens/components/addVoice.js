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

export default function AddVoice({ title }) {
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
    console.log(path);

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

      const response = await createPost(formData);
    }

    else if (title == "comments") {
      formData.append('comment', {
        uri: info.uri,
        name: `recording-${Date.now()}.mpeg`,
        type: 'audio/mpeg',
      });

      formData.append("postId", "64202d92c36029a871b607aa");

      const response = await createComment(formData);
    }

    else if (title == "bio") {
      formData.append('bio', {
        uri: info.uri,
        name: `recording-${Date.now()}.mpeg`,
        type: 'audio/mpeg',
      });

      const response = await createPost(formData);
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
              style={{ width: 50, height: 50, borderRadius: 25, marginRight: "3%" }} />
          ) : null}

          {(Math.floor(seconds / 60) < 10 && (seconds % 60) < 10) ? (
            <Text style={addVoiceStyle.time}>0{(Math.floor(seconds / 60)) + ':0' + (seconds % 60)}</Text>
          ) : (Math.floor(seconds / 60) < 10 && (seconds % 60) >= 10) ? (
            <Text style={addVoiceStyle.time}>0{(Math.floor(seconds / 60)) + ':' + (seconds % 60)}</Text>
          ) : (Math.floor(seconds / 60) >= 10 && (seconds % 60) >= 10) ? (
            <Text style={addVoiceStyle.time}>{(Math.floor(seconds / 60)) + ':' + (seconds % 60)}</Text>
          ) : (Math.floor(seconds / 60) >= 10 && (seconds % 60) < 10) ? (
            <Text style={addVoiceStyle.time}>{(Math.floor(seconds / 60)) + ':0' + (seconds % 60)}</Text>
          ) : null}
          {isRunning == true ? (
            <Image
              source={waweGif}
              style={{ width: 50, height: 50, borderRadius: 25, marginLeft: "4%" }} />
          ) : null}
        </View>

        <TouchableOpacity style={addVoiceStyle.touch} onPress={toggleRecord}>
          <Icon type="feather" size={28} name={"mic"} color={colors.white} />
        </TouchableOpacity>
      </View>

    </View>
  )
}