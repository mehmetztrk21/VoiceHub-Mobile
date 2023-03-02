import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
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
      setVisiblePopUp(false)
      setVisibleUpload(false)
      navigation.navigate(page, { uName: userName, isYourProfile: true })
    }
    
  }

  return (
    <View style={[bottomTabsStyle.wrapper,{background:'linear-gradient(to right, '+colors.green+', #006D5B)'}]}>
      <View style={bottomTabsStyle.container}>
        <TouchableOpacity onPress={() => Select("HomeScreen")}>
          <Icon size={25} type="font-awesome" name={'home'} color={pageName=="HomeScreen"?(colors.green):colors.white}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("SearchScreen")}>
          <Icon size={25} type="font-awesome" name={'search'} color={pageName=="SearchScreen"?(colors.green):colors.white}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("ProfileScreen")}>
          <Icon size={25} type="font-awesome" name={'user'} color={pageName=="ProfileScreen"?(colors.green):colors.white}/>
        </TouchableOpacity>
      </View>
    </View>
  )


}
export default BottomTabs