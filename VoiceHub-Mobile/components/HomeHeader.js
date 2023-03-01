import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'
import colors from '../assets/colors'
import user1 from "../assets/images/userImages/user1.jpg"
const HomeHeader = ({navigation}) => {
    return (
    <View style={{position:"fixed", width:'100%', top:0, zIndex:999, backgroundColor:colors.green }}>
        <Divider width={1} orientation='vertical'/>
        <View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Image source={user1} style={{ width: "15%", aspectRatio: 1 }} />
                <Text style={{fontSize:16, fontWeight:"700"}}>Feed</Text>
                <TouchableOpacity>
                    <Icon type={"font-awesome"} name={"bell-o"} />
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
                <TouchableOpacity>
                    <Text>All</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Popular</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Friends</Text>
                </TouchableOpacity>
            </View>

        </View>
        </View>
    )
}

export default HomeHeader