import React, { useRef, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../assets/colors";
import searchStyles from '../assets/styles/search.style';
import BottomTabs from "./components/BottomTabs";
import RenderLastSearchedUser from "./components/RenderLastSearchedUser";
import RenderPost from "./components/RenderPost";
import SearchHeader from "./components/SearchHeader";

import { Dimensions } from 'react-native';
import userPostData from "./components/userPostData";

const { width } = Dimensions.get('window');

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function SearchScreen({ navigation, route }) {
  const { uName } = route.params;

  const [focused, setFocused] = useState(false);

  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [visibleUpload, setVisibleUpload] = useState(false)

  const [refreshing, setRefreshing] = useState(false);

  {/*Coming Soon --->*/ }
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  {/*<--- Coming Soon */ }

  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    console.log('yukarı kaydı')
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
                    <TouchableOpacity onPress={()=>console.log(item.userName)}>
                      <Text style={[searchStyles.SecondText, { background: colors.grad, width: width * 0.3, marginHorizontal: width * 0.0125, }]}>#{item.userName}</Text>
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
            <RenderPost navigation={navigation} />
          </View>
        ) :
          <View>
            {/* Get Last Searched Users */}
            <RenderLastSearchedUser navigation={navigation} />
          </View>
        }
      </ScrollView>
      <BottomTabs navigation={navigation} userName={uName}
        visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp}
        pageName={"SearchScreen"} visibleUpload={visibleUpload}
        setVisibleUpload={setVisibleUpload} />
    </SafeAreaView>
  );
}
