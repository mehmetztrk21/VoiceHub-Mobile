import { View, Text, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

import BottomTabs from '../components/BottomTabs'

import colors from '../assets/colors'
import user1 from "../assets/images/userImages/user1.jpg"
import ver from "../assets/ver.png"

const seePost = ({navigation}) => {
  return (
    <View style={{flex:1, width:"100%",backgroundColor:colors.green}}>
      <View style={{backgroundColor:colors.white, borderBottomEndRadius:40, borderBottomStartRadius:40}}>
        <View style={{flexDirection:"row", justifyContent:'space-between', marginHorizontal:"2%", marginVertical:"5%"}}>
            <Icon type='font-awesome' name='angle-left'  color={colors.black}/>
            
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text>k.kayserili</Text>
                <Image source={ver} style={{width:20, height:20, marginLeft:"5%"}}/>
            </View>
            
            <Icon type='font-awesome' name="ellipsis-v" color={colors.black}/>
        </View>

        <View style={{alignItems:"center"}}>
            <Image source={user1} style={{width: 200, height:200, borderRadius:100}}/>
        </View>
        
        <View style={{flexDirection:"column", paddingBottom:"5%"}}>
            <Text>Kaan Kayserili</Text>
            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <Icon type='font-awesome' name='play' color={colors.black}/>
                <Text>Slider Gelecek</Text>
            </View>
        </View>
      </View>

      <BottomTabs navigation={navigation} pageName={'Profile'}/>
    </View>
  )
}

export default seePost