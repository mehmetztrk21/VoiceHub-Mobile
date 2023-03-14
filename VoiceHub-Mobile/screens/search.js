import React, { useRef, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

import colors from "../assets/colors";
import searchStyles from "../assets/styles/search.style";

import BottomTabs from "./components/BottomTabs";
import RenderLastSearchedUser from "./components/RenderLastSearchedUser";
import RenderPost from "./components/RenderPost";
import SearchHeader from "./components/SearchHeader";
import AreYouSure from "./components/areYouSure";
import PopUp from "./components/popUp";
import userPostData from "./components/userPostData";

import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

/* For Refresh this page */
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function SearchScreen({ navigation, route }) {
  const { uName, getCategory } = route.params;

  const [focused, setFocused] = useState(false);

  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [openAreYouSure, setOpenAreYouSure] = useState(false)

  const [visibleUpload, setVisibleUpload] = useState(false)

  const [refreshing, setRefreshing] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(getCategory);

  {/*Coming Soon --->*/ }
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  {/*<--- Coming Soon */ }

  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    console.log("yukarı kaydı")
    scrollViewRef.current.scrollTo({ y: 0 })
  };

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 1200)
  }

  return (
    <SafeAreaView style={searchStyles.container}>

      <SearchHeader pressLogo={handleScrollToTop} />



      <View style={searchStyles.searchBarHolder}>
        {focused == true ? (
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Search"
              style={[searchStyles.searchBar, searchStyles.widthChange1]}
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <TouchableOpacity onPress={() => { setFocused(false); setSearchQuery("") }}
              style={searchStyles.closeButtonTouch}>
              <Icon type="font-awesome" size={"175%"} name={"times"}
                style={searchStyles.closeButton} color={colors.green} />
            </TouchableOpacity>
          </View>

        ) :
          <View>
            <TextInput
              placeholder="Search"
              style={[searchStyles.searchBar, searchStyles.widthChange2]}
              onChangeText={onChangeSearch}
              value={searchQuery}
              onFocus={() => setFocused(true)}
            />
            <ScrollView horizontal style={{ marginStart: width * 0.0125, marginEnd: width * 0.0125, paddingVertical: 10 }}>
              {
                userPostData.map((item) => {
                  return (
                    <TouchableOpacity onPress={() => setSelectedCategory(item.category)}>

                      <Text style={[searchStyles.SecondText,
                      { width: width * 0.3, marginHorizontal: width * 0.0125, },
                      selectedCategory == item.category ? {
                        borderWidth: 2, borderColor: colors.tealGreen,
                        backgroundColor: colors.white, color: colors.tealGreen
                      } : { background: colors.grad, color: colors.white }]}>#{item.category}</Text>

                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
          </View>
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={searchStyles.scrollContainer}
        ref={scrollViewRef}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} />
        }
      >
        {focused == false ? (
          <View>
            {/* Get Users Posts */}
            <RenderPost navigation={navigation} HeaderTitle={"SearchScreen"} />
          </View>
        ) :
          <View>
            {/* Get Last Searched Users */}
            <RenderLastSearchedUser navigation={navigation} />
          </View>
        }
      </ScrollView>

      {visiblePopUp == true ? (
        <PopUp navigation={navigation} bottomSize={50} setOpenAreYouSure={setOpenAreYouSure} setVisiblePopUp={setVisiblePopUp} />
      ) : openAreYouSure == true ? (
        <AreYouSure process={"LogOut"} navigation={navigation} bottomSize={50} setOpenAreYouSure={setOpenAreYouSure} />
      ) : null}

      <BottomTabs navigation={navigation} userName={uName}
        visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp}
        pageName={"SearchScreen"} visibleUpload={visibleUpload}
        setVisibleUpload={setVisibleUpload} />
    </SafeAreaView>
  );
}
