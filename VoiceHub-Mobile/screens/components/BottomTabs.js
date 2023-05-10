import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
import bottomTabsStyle from "../../assets/styles/bottomTabs.style";
const { height } = Dimensions.get("window");

const BottomTabs = () => {
  const navigation = useNavigation();

  const Select = (page) => {
    if (page == "SearchScreen") {
      navigation.navigate(page, { getCategory: "all", type: "discovery" });
    }
    else {
      navigation.navigate(page);
    }
  }

  return (
    <View style={[bottomTabsStyle.wrapper, { height: height * 0.075 }]}>
      <View style={bottomTabsStyle.container}>

        <TouchableOpacity onPress={() => Select("HomeScreen")}>
          <Icon size={height * 0.0375} type="font-awesome" name={"home"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("SearchScreen")}>
          <Icon size={height * 0.0375} type="font-awesome" name={"search"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("Upload")}>
          <Icon size={height * 0.0375} type="font-awesome" name={"plus"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Select("ProfileScreen")}>
          <Icon size={height * 0.0375} type="font-awesome" name={"user"} color={colors.white} />
        </TouchableOpacity>

      </View>
    </View>
  )


}
export default BottomTabs