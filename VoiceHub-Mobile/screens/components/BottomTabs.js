import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../assets/colors";
import bottomTabsStyle from "../../assets/styles/bottomTabs.style";
import { useNavigation } from "@react-navigation/native";

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

        <TouchableOpacity onPress={() => Select("ProfileScreen")}>
          <Icon size={25} type="font-awesome" name={"user"} color={colors.white} />
        </TouchableOpacity>

      </View>
    </View>
  )


}
export default BottomTabs