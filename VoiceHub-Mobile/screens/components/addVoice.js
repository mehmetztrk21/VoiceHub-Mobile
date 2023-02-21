import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Divider, Icon } from 'react-native-elements';
import addVoiceStyle from '../../assets/styles/addVoice.style';
import gif from "../../assets/images/rec.gif";
import recImg from "../../assets/images/rec.png";

export default function AddVoice() {
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
    {/* go backend */}
    setSeconds(0);
    setIsRunning(false);
  };

    return (
        <View style={addVoiceStyle.wrapper}>
            <Divider width={1} orientation='vertical' />

            <View style={addVoiceStyle.container}>
                <View style={addVoiceStyle.content}>
                    {isRunning == true ? (
                        <Image
                            source={gif}
                            style={{ width: 50, height: 50, borderRadius:25 }} />
                    ) :
                        <Image
                            source={recImg}
                            style={{ width: 50, height: 50, borderRadius:25 }} />
                    }
                    <Text style={addVoiceStyle.time}>{(Math.floor(seconds/60))+":"+(seconds%60)}</Text>
                </View>

                <TouchableOpacity style={addVoiceStyle.touch}
                    onPressIn={handleStartStop} onPressOut={handleReset}>
                    <Icon type="feather" size={"175%"} name={"mic"} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
