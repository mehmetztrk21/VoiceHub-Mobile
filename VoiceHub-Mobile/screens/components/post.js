import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Slider, Icon } from 'react-native-elements';
import postStyle from "../../assets/styles/post.style";
import sliderStyle from "../../assets/styles/slider.style";
import colors from '../../assets/colors';

const Post = ({navigation}) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (sound) {

    }
    else {
      loadSound();
    }
  }, [sound]);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('../../assets/sounds/a.mp3'));
    setSound(sound);
    const playbackStatus = await sound.getStatusAsync();
    // console.log(playbackStatus)  

    sound.setOnPlaybackStatusUpdate((playbackStatus) => {
        //console.log('Ses dosyasının süresi:', playbackStatus.durationMillis, 'milisaniye');
        //console.log('Ses anlık süresi:', playbackStatus.positionMillis, 'milisaniye');
        setDuration(playbackStatus.durationMillis)
        console.log(playbackStatus.durationMillis)
        console.log(playbackStatus.positionMillis)
        setPosition(playbackStatus.positionMillis)
    });
  };

  const playSound = async () => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(!isPlaying);
    }
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <View style={postStyle.post}>

      <TouchableOpacity style={postStyle.playButton} onPress={isPlaying ? pauseSound : playSound}>
        {
          isPlaying ? (
            <Icon type="feather" size={28} name={"pause"} 
            color={colors.black}/>
          ) :
            <Icon type="feather" size={28} name={"play"} 
            color={colors.black}/>
        }
      </TouchableOpacity>

      <Slider
        style={sliderStyle.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        minimumTrackTintColor={colors.green}
        maximumTrackTintColor={colors.gray}
        thumbTintColor={colors.green}
        thumbStyle={{ height: 22.5, width: 22.5, }}
      />
    </View>
  );
};

export default Post;
