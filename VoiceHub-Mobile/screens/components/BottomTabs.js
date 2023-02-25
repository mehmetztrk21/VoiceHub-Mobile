import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'
import colors from '../../assets/colors'
import bottomTabsStyle from '../../assets/styles/bottomTabs.style'

const BottomTabs = ({ navigation, userName, visiblePopUp,setVisiblePopUp, visibleUpload,setVisibleUpload,pageName }) => {

  const Select = (page) => {
    if(pageName==="ProfileScreen" && page==="ProfileScreen"){
      if(visiblePopUp==true){
        setVisiblePopUp(false)
      }
      else{
        setVisiblePopUp(true);
        if(visibleUpload==true){
          setVisibleUpload(false)
        }
      }
      
    }
    else{
      navigation.navigate(page, { uName: userName, isYourProfile: true })
    }
    
  }

  return (
    <View style={bottomTabsStyle.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={bottomTabsStyle.container}>
        <TouchableOpacity onPress={() => Select("HomeScreen")}>
          <Icon size={25} type="feather" name={'home'} color={pageName=="HomeScreen"?(colors.green):colors.black}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("SearchScreen")}>
          <Icon size={25} type="feather" name={'search'} color={pageName=="SearchScreen"?(colors.green):colors.black}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("ActivityScreen")}>
          <Icon size={25} type="feather" name={'heart'} color={pageName=="ActivityScreen"?(colors.green):colors.black}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("ProfileScreen")}>
          <Icon size={25} name={'person'} color={pageName=="ProfileScreen"?(colors.green):colors.black}/>
        </TouchableOpacity>
      </View>
    </View>
  )


}
export default BottomTabs