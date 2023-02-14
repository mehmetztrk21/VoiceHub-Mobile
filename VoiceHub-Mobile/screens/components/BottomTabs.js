import { TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, Divider } from 'react-native-elements'
import bottomTabsStyle from '../../assets/styles/bottomTabs.style'


const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState('HomeScreen')
  return (
    <View style={bottomTabsStyle.wrapper}>
      <Divider width={1} orientation='vertical'>
        <View style={bottomTabsStyle.container}>
          <TouchableOpacity onPress={() => setActiveTab('HomeScreen')}>
            <Icon size={25} type="feather" name={'home'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('SearchScreen')}>
            <Icon size={25} type="feather" name={'search'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('ActivityScreen')}>
            <Icon size={25} type="feather" name={'heart'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('ProfileScreen')}>
            <Icon size={25} name={'person'} />
          </TouchableOpacity>
        </View>
      </Divider>
    </View>
  )
}

export default BottomTabs