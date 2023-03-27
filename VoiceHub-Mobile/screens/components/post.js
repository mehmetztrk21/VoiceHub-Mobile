import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon, Slider } from "react-native-elements";

import postStyle from "../../assets/styles/post.style";
import sliderStyle from "../../assets/styles/slider.style";
import colors from "../../assets/colors";

const Post = ({uri}) => {
  const [soundObject, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(1);
  const [position, setPosition] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    loadSound();
    return () => {
      if (soundObject) {
        soundObject.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    setSliderValue(position / duration);
  }, [position, duration, setSliderValue]);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync({
      uri: "http://10.0.2.2:5000/" + uri || "",
    });
    setSound(sound);
    sound.setOnPlaybackStatusUpdate((playbackStatus) => {
      setDuration(playbackStatus.durationMillis);
      setPosition(playbackStatus.positionMillis);
      setSliderValue(playbackStatus.positionMillis / playbackStatus.durationMillis);

      if (playbackStatus.didJustFinish) {
        sound.setPositionAsync(0);
        sound.pauseAsync();
        setIsPlaying(false);
      }
    });
  };

  const playSound = async () => {
    if (soundObject) {
      if (!isPlaying) {
        setIsPlaying(true);
        await soundObject.playAsync();
      }
    } else {
      loadSound();
    }
  };

  const pauseSound = async () => {
    if (soundObject) {
      if (isPlaying) {
        await soundObject.pauseAsync();
        setIsPlaying(false);
      }
    }
  };

  const onSliderValueChange = (value) => {
    if (soundObject) {
      setPosition(value);
      soundObject.setPositionAsync(value).catch((error) => {
        console.log("Error setting position:", error);
      });
    } else {
      console.log("Sound object is null");
    }
  };

  return (
    <View style={postStyle.post}>
      <TouchableOpacity
        style={postStyle.playButton}
        onPress={isPlaying ? pauseSound : playSound}
      >
        {
          isPlaying ? (
            <Icon type="feather" size={28} name={"pause"} color={colors.black} />
          ) : (
            <Icon type="feather" size={28} name={"play"} color={colors.black} />
          )
        }
      </TouchableOpacity>

      <Slider
        style={sliderStyle.slider}
        minimumValue={0}
        maximumValue={1}
        value={sliderValue}
        onValueChange={(value) => onSliderValueChange}
        minimumTrackTintColor={colors.green}
        maximumTrackTintColor={colors.gray}
        thumbTintColor={colors.green}
        thumbStyle={{ height: 22.5, width: 22.5 }}
        animationType="timing"
      />
    </View>
  );
};

export default Post;
