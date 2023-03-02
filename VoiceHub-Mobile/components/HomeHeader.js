import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'

import colors from '../assets/colors'
import user1 from "../assets/images/userImages/user1.jpg"
const HomeHeader = ({navigation}) => {
    return (
    <View style={{position:"fixed", width:'100%', top:0, zIndex:999, paddingHorizontal:10, }}>
        <Divider width={1} orientation='vertical'/>

        <View style={{width:"100%", height:160, backgroundColor:colors.white, flexDirection:"column", justifyContent:"space-around"}}>
            <View style={{flexDirection:"row", justifyContent:"space-between" }}>
                <Image source={user1} style={{ width: 50, height: 50, borderRadius:25,  }} />
                <Text style={{fontSize:24, fontWeight:"700"}}>Feed</Text>
                <TouchableOpacity>
                    <Icon type={"font-awesome"} name={"bell-o"} />
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                <TouchableOpacity style={{paddingVertical:10, paddingHorizontal:20, borderRadius:20, background: 'linear-gradient(to right, #1DB954, #006D5B)'}}>
                    <Text style={{fontSize:16, fontWeight:"700", color:colors.white}}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{paddingVertical:10, paddingHorizontal:20, borderRadius:20, background: 'linear-gradient(to right, #1DB954, #006D5B)'}}>
                    <Text style={{fontSize:16, fontWeight:"700", color:colors.white}}>Popular</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{paddingVertical:10, paddingHorizontal:20, borderRadius:20, background: 'linear-gradient(to right, #1DB954, #006D5B)'}}>
                    <Text style={{fontSize:16, fontWeight:"700", color:colors.white}}>Friends</Text>
                </TouchableOpacity>
            </View>

        </View>
        </View>
    )
}

export default HomeHeader