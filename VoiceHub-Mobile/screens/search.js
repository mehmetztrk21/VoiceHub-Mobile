import React, { useRef, useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, Image, TextInput, SafeAreaView } from "react-native";

import RenderDiscover from "./components/RenderDiscover";
import RenderLastSearchedUser from "./components/RenderLastSearchedUser";
import BottomTabs from "./components/BottomTabs";
import SearchHeader from "./components/SearchHeader";
import searchStyles from '../assets/styles/search.style';

export default function SearchScreen({ navigation, route }) {
  const { userName } = route.params;
  const [focused, setFocused] = useState(true);
  {/*Coming Soon --->*/ }
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  {/*<--- Coming Soon */ }

  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    console.log('yukarı kaydı')
    scrollViewRef.current.scrollTo({y:0})
  };

  return (
    <SafeAreaView style={searchStyles.container}>

    <SearchHeader pressLogo={handleScrollToTop}/>

      <View style={searchStyles.searchBarHolder}>
        <TextInput
          placeholder="Search"
          style={searchStyles.searchBar}
          onChangeText={onChangeSearch}
          value={searchQuery}
          onFocus={() => setFocused(!focused)}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={searchStyles.scrollContainer}
        ref={scrollViewRef}
      >
        {focused ? (
          <View style={searchStyles.userHodler}>
            {/* Get Users Infos */}
            <RenderDiscover  navigation={navigation}/>
          </View>
        ) :
          <View style={searchStyles.userHodler}>
            <RenderLastSearchedUser navigation={navigation}/>
          </View>
        }
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
}

