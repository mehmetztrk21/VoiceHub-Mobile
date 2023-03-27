import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
import bottomTabsStyle from "../../assets/styles/bottomTabs.style";

const BottomTabs = ({ navigation, userName, setVisiblePopUp, pageName }) => {

  const [timer, setTimer] = useState(null);
  const [timerSearch, setTimerSearch] = useState(null);

  const SearchButtonPress = () => {
    let timerId = setTimeout(() => {
      navigation.navigate("SearchScreen", { uName: userName, getCategory: "all", type: "lastSearched" })
    }, 1000);
    setTimerSearch(timerId);
  }

  const ProfileButtonPress = () => {
    let timerId = setTimeout(() => {
      setVisiblePopUp(prev => !prev)
    }, 1000);
    setTimer(timerId);
  }

  const Select = (page) => {
    setTimer(0);
    setVisiblePopUp(false)
    if (page == "SearchScreen") {
      navigation.navigate(page, { uName: userName, getCategory: "all", type: "discovery" });
    }
    else {
      navigation.navigate(page, { uName: userName });
    }

  }

  return (
    <View style={bottomTabsStyle.wrapper}>
      <View style={bottomTabsStyle.container}>
        <TouchableOpacity onPress={() => Select("HomeScreen")}>
          <Icon size={25} type="font-awesome" name={"home"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("SearchScreen")} onPressIn={SearchButtonPress} onPressOut={() => { console.log("Butondan elini cekti") }}>
          <Icon size={25} type="font-awesome" name={"search"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("Upload")}>
          <Icon size={25} type="font-awesome" name={"plus"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("ProfileScreen")} onPressIn={ProfileButtonPress} onPressOut={() => { console.log("Butondan elini cekti") }}>
          <Icon size={25} type="font-awesome" name={"user"} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  )


}
export default BottomTabs