import React, { useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../../assets/colors'
import holoGif from '../../assets/images/holo.gif'
import UploadStyle from '../../assets/styles/upload.style'
import BottomTabs from '../components/BottomTabs'

const upload = ({ navigation, route }) => {
    const { uName, isYourProfile } = route.params;

    const [visiblePopUp, setVisiblePopUp] = useState(false)

    const Record = () => {
        //record voice here!!
    }

    return (
        <SafeAreaView style={[UploadStyle.container, { background: 'linear-gradient(to right, ' + colors.green + ',' + colors.tealGreen + ')', }]}>
            {/* SES KAYDEDERKEN ANIMASYON OLACAK */}
            <Image source={holoGif} style={{ width: 300, height:300, borderRadius: 150,}} />

            <Text style={{ textAlign: 'center', fontSize: 32, fontWeight: "900", color: colors.white }}>00:48:52</Text>

            <TouchableOpacity onPressIn={() => { Record() }} style={{width:75, height:75, borderRadius:75, borderWidth:5, borderColor:colors.tealGreen, backgroundColor:colors.white, justifyContent:"center"}}>
                <Icon type={'font-awesome'} name={'microphone'} size={50} color={colors.green} />
            </TouchableOpacity>

            <BottomTabs navigation={navigation} userName={uName}
                visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp}
                pageName={"Upload"} />

        </SafeAreaView>
    )
}

export default upload