import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon, Divider } from 'react-native-elements'
import bottomTabsStyle from '../../assets/styles/bottomTabs.style'


const BottomTabs = ({ navigation, userName }) => {

  const visiblePopUp=()=>{
    
    navigation.navigate('ProfileScreen',{uName:userName, isYourProfile:true})
  }

  return (
    <View style={bottomTabsStyle.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={bottomTabsStyle.container}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen',{userName})}>
          <Icon size={25} type="feather" name={'home'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen',{userName})}>
          <Icon size={25} type="feather" name={'search'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ActivityScreen',{userName})}>
          <Icon size={25} type="feather" name={'heart'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={visiblePopUp}>
          <Icon size={25} name={'person'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomTabs