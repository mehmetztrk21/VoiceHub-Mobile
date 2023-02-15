import { View, Text,TouchableOpacity,Image,ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import OtherHeader from '../components/otherHeader'
import userPostData from '../components/userPostData'
import searchStyles from '../../assets/styles/search.style';
const Followers = ({navigation}) => {
    return (


        <SafeAreaView>
            <OtherHeader HeaderTitle='Follows' navigation={navigation} />
            <ScrollView>
                {
                    userPostData.map((item) => {
                        return (
                            <View style={searchStyles.last}>
                                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.push('SeeProfile')}>
                                    <Image source={item.userPic} style={searchStyles.lastSearchImage} />
                                    <View style={{ flexDirection: "column" }}>
                                        <Text>{item.userName}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Followers