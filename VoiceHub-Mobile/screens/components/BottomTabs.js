import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../../assets/colors'
import bottomTabsStyle from '../../assets/styles/bottomTabs.style'

const BottomTabs = ({ navigation, userName, visiblePopUp, setVisiblePopUp, pageName }) => {

  const [isSelected,setIsSelected]=useState("HomeScreen")

  const Select = (page) => {
    if(pageName==="ProfileScreen" && page==="ProfileScreen"){
        setVisiblePopUp(prev=>!prev);
    }
    else{
      setVisiblePopUp(false)
      navigation.navigate(page, { uName: userName, isYourProfile: true })
    }
    
  }

  return (
    <View style={[bottomTabsStyle.wrapper, { background: 'linear-gradient(to right, ' + colors.green + ', ' + colors.tealGreen + ')' }]}>
      <View style={bottomTabsStyle.container}>
        <TouchableOpacity onPress={() => Select("HomeScreen")}>
          <Icon size={25} type="font-awesome" name={'home'} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("SearchScreen")}>
          <Icon size={25} type="font-awesome" name={'search'} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("Upload")}>
          <Icon size={25} type="font-awesome" name={'plus'} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("ProfileScreen")}>
          <Icon size={25} type="font-awesome" name={'user'} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  )


}
export default BottomTabs