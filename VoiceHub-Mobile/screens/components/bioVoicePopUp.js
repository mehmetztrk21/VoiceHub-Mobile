import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import bioVoicePopUpStyle from '../../assets/styles/bioVoicePopUp.style'
import { Icon } from 'react-native-elements'
import colors from '../../assets/colors'
import { removeUserFiles } from '../../services/userServices'

const bioVoicePopUp = ({ setOpenAddVoice, setOpenBioVoicePopUp }) => {

    useEffect(() => {
        setOpenAddVoice(false);
    }, [])

    const deleteVoice = async () => {
        await removeUserFiles({ type: "descriptionVoice" })

        setOpenBioVoicePopUp(false);
    }

    return (
        <View style={bioVoicePopUpStyle.container}>
            <View style={bioVoicePopUpStyle.container2}>

                <TouchableOpacity onPress={() => { setOpenAddVoice(true); setOpenBioVoicePopUp(false); }}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <Icon size={20} type={"font-awesome"} name={"plus"} color={colors.white} />
                    <Text style={bioVoicePopUpStyle.button}>Add Voice</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => deleteVoice()}
                    style={{ flexDirection: "row", alignItems: "center", }}>
                    <Icon size={20} type={"font-awesome"} name={"trash"} color={colors.white} />
                    <Text style={bioVoicePopUpStyle.button}>Delete Voice</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setOpenBioVoicePopUp(false) }}>
                    <Text style={bioVoicePopUpStyle.closeButton}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default bioVoicePopUp