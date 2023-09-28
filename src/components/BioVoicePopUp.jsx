import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import bioVoicePopUpStyle from '../../assets/styles/bioVoicePopUp.style'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../assets/colors'

const BioVoicePopUp = ({ setIsDeleteVoice, setOpenAddVoice, setOpenBioVoicePopUp }) => {

    useEffect(() => {
        setOpenAddVoice(false);
    }, [])



    return (
        <View style={bioVoicePopUpStyle.container}>
            <View style={bioVoicePopUpStyle.container2}>

                <TouchableOpacity onPress={() => { setOpenAddVoice(true); setOpenBioVoicePopUp(false); }}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <Ionicons size={20} name={"add"} color={colors.white} />
                    <Text style={bioVoicePopUpStyle.button}>Add Voice</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setIsDeleteVoice(true); setOpenBioVoicePopUp(false); }}
                    style={{ flexDirection: "row", alignItems: "center", }}>
                    <Ionicons size={20} name={"trash"} color={colors.white} />
                    <Text style={bioVoicePopUpStyle.button}>Delete Voice</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setOpenBioVoicePopUp(false) }}>
                    <Text style={bioVoicePopUpStyle.closeButton}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BioVoicePopUp