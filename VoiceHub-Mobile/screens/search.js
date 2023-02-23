import React, { useRef, useState } from "react";
import { ScrollView, TouchableOpacity, View, TextInput, SafeAreaView } from "react-native";
import colors from "../assets/colors"
import RenderDiscover from "./components/RenderDiscover";
import RenderLastSearchedUser from "./components/RenderLastSearchedUser";
import BottomTabs from "./components/BottomTabs";
import SearchHeader from "./components/SearchHeader";
import searchStyles from '../assets/styles/search.style';
import { Icon } from "react-native-elements";

export default function SearchScreen({ navigation, route }) {
  const { userName } = route.params;
  const [focused, setFocused] = useState(false);
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
        {focused==true ? (
          <View style={{flexDirection:"row"}}>
            <TextInput
              placeholder="Search"
              style={[searchStyles.searchBar,searchStyles.widthChange1]}
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <TouchableOpacity onPress={() => {setFocused(false); setSearchQuery("")}} style={searchStyles.closeButtonTouch}>
              <Icon type="font-awesome" size={"175%"} name={"times"} style={searchStyles.closeButton} color={colors.green}/>
            </TouchableOpacity>
          </View>

        ) :
          <TextInput
            placeholder="Search"
            style={[searchStyles.searchBar,searchStyles.widthChange2]}
            onChangeText={onChangeSearch}
            value={searchQuery}
            onFocus={() => setFocused(true)}
          />
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={searchStyles.scrollContainer}
        ref={scrollViewRef}
      >
        {focused==false ? (
          <View style={searchStyles.userHodler}>
            {/* Get Users Infos */}
            <RenderDiscover navigation={navigation} />
          </View>
        ) :
          <View style={searchStyles.userHodler}>
            <RenderLastSearchedUser navigation={navigation} />
          </View>
        }
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
}

