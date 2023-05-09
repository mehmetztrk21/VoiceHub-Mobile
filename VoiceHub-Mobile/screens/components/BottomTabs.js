import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
import bottomTabsStyle from "../../assets/styles/bottomTabs.style";
import { useNavigation } from "@react-navigation/native";

const BottomTabs = () => {
  const [timer, setTimer] = useState(null);
  const navigation = useNavigation();

  const ProfileButtonPress = () => {
    let timerId = setTimeout(() => {
      //setVisiblePopUp(true);
    }, 1000);
    setTimer(timerId);
  }

  const Select = (page) => {
    if (page == "SearchScreen") {
      setTimer(0);
      navigation.navigate(page, { getCategory: "all", type: "discovery" });
    }
    else if (page == "ProfileScreen") {
      setTimer(0);
      navigation.navigate(page);
    }
    else {
      setTimer(0);
      navigation.navigate(page);
    }
  }

  return (
    <View style={bottomTabsStyle.wrapper}>
      <View style={bottomTabsStyle.container}>

        <TouchableOpacity onPress={() => Select("HomeScreen")}>
          <Icon size={25} type="font-awesome" name={"home"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("SearchScreen")}>
          <Icon size={25} type="font-awesome" name={"search"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("Upload")}>
          <Icon size={25} type="font-awesome" name={"plus"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("ProfileScreen")} onPressIn={ProfileButtonPress}>
          <Icon size={25} type="font-awesome" name={"user"} color={colors.white} />
        </TouchableOpacity>

      </View>
    </View>
  )


}
export default BottomTabs