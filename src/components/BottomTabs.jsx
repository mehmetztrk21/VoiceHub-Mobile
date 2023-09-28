import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

import colors from "../../assets/colors";
import bottomTabsStyle from "../../assets/styles/bottomTabs.style";
const { height } = Dimensions.get("window");

const BottomTabs = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("HomeScreen");

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

        <TouchableOpacity onPress={() => { setActiveTab("HomeScreen"); Select("HomeScreen") }}>
          <Ionicons size={height * 0.0375} name={activeTab == "HomeScreen" ? "home" : "home-outline"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setActiveTab("SearchScreen"); Select("SearchScreen") }}>
          <Ionicons size={height * 0.0375} name={activeTab == "SearchScreen" ? "search" : "search-outline"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setActiveTab("Upload"); Select("Upload") }}>
          <Ionicons size={height * 0.0375} name={activeTab == "Upload" ? "add" : "add-outline"} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setActiveTab("ProfileScreen"); Select("ProfileScreen") }}>
          <Ionicons size={height * 0.0375} name={activeTab == "ProfileScreen" ? "person" : "person-outline"} color={colors.white} />
        </TouchableOpacity>

      </View>
    </View>
  )


}
export default BottomTabs