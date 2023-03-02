import React from 'react';
import sliderStyle from "../../assets/styles/slider.style"
import { Slider } from "react-native-elements";
import colors  from '../../assets/colors';

export default function SliderComponent() {
        
      return (
        <Slider
          style={sliderStyle.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor= {colors.green}
          maximumTrackTintColor={colors.gray}
          thumbTintColor={colors.green}
          thumbStyle={{ height: 25, width: 25, }}
        />
      );
    }