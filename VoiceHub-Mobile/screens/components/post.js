import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Slider, Icon } from 'react-native-elements';
import postStyle from "../../assets/styles/post.style";
import sliderStyle from "../../assets/styles/slider.style";
import colors from '../../assets/colors';

const Post = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if(sound){

    }
    else{
      loadSound();
    }
  }, [sound]);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('./a.mp3'));
    setSound(sound);
    const {playbackStatus} = await sound.getStatusAsync();
    setPosition(playbackStatus.positionMillis);   
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

  const onSliderValueChange = async value => {
    if (sound) {
      await sound.setPositionAsync(value * duration);
      setPosition(value);
    }
  };

  return (
    <View style={postStyle.post}>

      <TouchableOpacity style={postStyle.playButton} onPress={isPlaying ? pauseSound : playSound}>
        {
          isPlaying ? (
            <Icon type="feather" size={"175%"} name={"pause"} />
          ) :
            <Icon type="feather" size={"175%"} name={"play"} />
        }
      </TouchableOpacity>

      <Slider
        style={sliderStyle.slider}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor= {colors.green}
          maximumTrackTintColor={colors.gray}
          thumbTintColor={colors.green}
        thumbStyle={{ height: 25, width: 25, }}
        value={duration*position}
        onValueChange={onSliderValueChange}
      />
    </View>
  );
};

export default Post;
