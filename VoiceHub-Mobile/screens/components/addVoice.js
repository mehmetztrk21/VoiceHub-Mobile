import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Divider, Icon } from 'react-native-elements'
import addVoice from '../../assets/styles/addVoice.style'
import addVoiceStyle from '../../assets/styles/addVoice.style'
import gif from "../../assets/images/rec.gif";
import recImg from "../../assets/images/rec.png";
let recordingTime=0;
export default function AddVoice() {
    const [record, setRecord] = useState(false)

    return (
        <View style={addVoice.wrapper}>
            <Divider width={1} orientation='vertical' />

            <View style={addVoice.container}>
                {record == true ? (
                    <Image
                        source={gif}
                        style={{ width: 50, height: 50 }} />
                ) :
                    <Image
                        source={recImg}
                        style={{ width: 50, height: 50 }} />
                }
                <Text style={addVoiceStyle.time}>00:00</Text>
                {console.log(recordingTime)}
                <TouchableOpacity style={{ justifyContent: "center", alignContent: "center", bottom: 30 }}
                    onPressIn={() => setRecord(true)} onPressOut={() => setRecord(false)}>
                    <Icon type="feather" size={"175%"} name={"mic"} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
