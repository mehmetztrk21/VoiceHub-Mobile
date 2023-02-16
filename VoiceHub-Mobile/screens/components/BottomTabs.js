import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon, Divider } from 'react-native-elements'
import bottomTabsStyle from '../../assets/styles/bottomTabs.style'


const BottomTabs = ({ navigation }) => {
  return (
    <View style={bottomTabsStyle.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={bottomTabsStyle.container}>
        <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
          <Icon size={25} type="feather" name={'home'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push('SearchScreen')}>
          <Icon size={25} type="feather" name={'search'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push('ActivityScreen')}>
          <Icon size={25} type="feather" name={'heart'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen',{uName:'k.kayserili', isYourProfile:true})}>
          <Icon size={25} name={'person'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomTabs