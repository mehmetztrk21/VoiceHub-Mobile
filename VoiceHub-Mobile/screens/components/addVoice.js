import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

import recGif from "../../assets/images/rec.gif";
import waweGif from "../../assets/images/record.gif";

import addVoiceStyle from '../../assets/styles/addVoice.style';

export default function AddVoice({ bottomSize }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);

      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = () => {
    {/* go backend */ }
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <View style={[addVoiceStyle.wrapper, { marginBottom: bottomSize }]}>

      <View style={addVoiceStyle.container}>
        <View style={addVoiceStyle.content}>
          {isRunning == true ? (
            <Image
              source={recGif}
              style={{ width: 50, height: 50, borderRadius: 25 }} />
          ) : null}
          <Text style={addVoiceStyle.time}>{(Math.floor(seconds / 60)) + ":" + (seconds % 60)}</Text>
          {isRunning == true ? (
            <Image
              source={waweGif}
              style={{ width: 50, height: 50, borderRadius: 25 }} />
          ) : null}
        </View>

        <TouchableOpacity style={addVoiceStyle.touch}
          onPressIn={handleStartStop} onPressOut={handleReset}>
          <Icon type="feather" size={"175%"} name={"mic"} />
        </TouchableOpacity>
      </View>

    </View>
  )
}