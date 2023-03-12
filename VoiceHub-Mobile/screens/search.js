import React, { useRef, useState } from "react";
import { SafeAreaView, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../assets/colors";
import searchStyles from '../assets/styles/search.style';
import BottomTabs from "./components/BottomTabs";
import RenderLastSearchedUser from "./components/RenderLastSearchedUser";
import RenderPost from "./components/RenderPost";
import SearchCategories from "./components/searchCategories";
import SearchHeader from "./components/SearchHeader";

export default function SearchScreen({ navigation, route }) {
  const { uName, isYourProfile } = route.params;

  const [focused, setFocused] = useState(false);

  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [visibleUpload, setVisibleUpload] = useState(false)

  {/*Coming Soon --->*/ }
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  {/*<--- Coming Soon */ }

  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    console.log('yukarı kaydı')
    scrollViewRef.current.scrollTo({ y: 0 })
  };

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
            <ScrollView horizontal={true}>
              <SearchCategories />
            </ScrollView>
          </View>
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={searchStyles.scrollContainer}
        ref={scrollViewRef}
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
