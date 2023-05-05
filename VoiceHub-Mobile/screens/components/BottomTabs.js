import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
import bottomTabsStyle from "../../assets/styles/bottomTabs.style";

const BottomTabs = ({ navigation, setVisiblePopUp, title }) => {
  const [timer, setTimer] = useState(null);

  const ProfileButtonPress = () => {
    let timerId = setTimeout(() => {
      setVisiblePopUp(prev => !prev)
    }, 1000);
    setTimer(timerId);
  }
  const Select = (page) => {
    if (page == "SearchScreen") {
      setTimer(0);
      setVisiblePopUp(false)
      navigation.navigate(page, { getCategory: "all", type: "discovery" });
    }
    else {
      setTimer(0);
      setVisiblePopUp(false)
      navigation.navigate(page);
    }
  }

  return (
    <View style={bottomTabsStyle.wrapper}>
      <View style={bottomTabsStyle.container}>

        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          {title == "home" ?
            <Icon size={25} type="font-awesome" name={"home"} color={colors.white} /> :
            <Icon size={25} type="feather" name={"home"} color={colors.white} />}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("SearchScreen")}>
          {title == "search" ?
            <Icon size={25} type="font-awesome" name={"search"} color={colors.white} /> :
            <Icon size={25} type="font-awesome" name={"search"} color={colors.white} />}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("Upload")}>
          {title == "upload" ?
            <Icon size={25} type="font-awesome" name={"plus"} color={colors.white} /> :
            <Icon size={25} type="entypo" name={"plus"} color={colors.white} />}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("ProfileScreen")} onPressIn={ProfileButtonPress} onPressOut={() => { console.log("Butondan elini cekti") }}>
          {title == "profile" ?
            <Icon size={25} type="font-awesome" name={"user"} color={colors.white} /> :
            <Icon size={25} type="feather" name={"user"} color={colors.white} />}
        </TouchableOpacity>

      </View>
    </View>
  )


}
export default BottomTabs