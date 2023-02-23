import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'
import bottomTabsStyle from '../../assets/styles/bottomTabs.style'

const BottomTabs = ({ navigation, userName }) => {

  return (
    <View style={bottomTabsStyle.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={bottomTabsStyle.container}>
        <TouchableOpacity onPress={() => Select("HomeScreen")}>
          <Icon size={25} type="feather" name={'home'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("SearchScreen")}>
          <Icon size={25} type="feather" name={'search'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("ActivityScreen")}>
          <Icon size={25} type="feather" name={'heart'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("ProfileScreen")}>
          <Icon size={25} name={'person'} />
        </TouchableOpacity>
      </View>
    </View>
  )

  function Select(pageName) {
    navigation.navigate(pageName, { uName: userName, isYourProfile: true })
  }
}
export default BottomTabs