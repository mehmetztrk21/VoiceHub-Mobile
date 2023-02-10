import React from 'react';
import postStyle from "../../assets/styles/post.style"
import { Slider } from "react-native-elements";
import colors  from '../../assets/colors';

export default function UserMessageItem() {
        
      return (
        <Slider
          style={postStyle.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor= {colors.green}
          maximumTrackTintColor={colors.gray}
          thumbTintColor={colors.green}
        />
      );
    }