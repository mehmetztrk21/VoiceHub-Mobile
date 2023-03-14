import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
import bottomTabsStyle from "../../assets/styles/bottomTabs.style";

const BottomTabs = ({ navigation, userName, setVisiblePopUp, pageName }) => {

  const [timer, setTimer] = useState(null);

  const handeleButtonPress = () => {
    let timerId = setTimeout(() => {
      setVisiblePopUp(prev => !prev)
    }, 2000);
    setTimer(timerId);
  }

  const Select = (page) => {
    setVisiblePopUp(false)
    if (page == "SearchScreen") {
      navigation.navigate(page, { uName: userName, getCategory: "all" });
    }
    else {
      navigation.navigate(page, { uName: userName });
    }
  }

  return (
    <View style={[bottomTabsStyle.wrapper, { background: colors.grad }]}>
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

        <TouchableOpacity onPress={() => Select("ProfileScreen")} onPressIn={handeleButtonPress} onPressOut={() => clearTimeout(timer)}>
          <Icon size={25} type="font-awesome" name={"user"} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  )


}
export default BottomTabs