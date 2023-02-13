import {TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Divider, Icon } from 'react-native-elements'



const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState('HomeScreen')
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setActiveTab('HomeScreen')}>
        <Icon size={25} type="feather" name={'home'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab('SearchScreen')}>
        <Icon size={25} type="feather" name={'search'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab('ActivityScreen')}>
        <Icon size={25} type="feather" name={'heart'}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab('ProfileScreen')}>
        <Icon size={25} type="feather" name={'person'}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default BottomTabs