import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Modal, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Icon } from "react-native-elements";

import { getExplorePosts } from "../services/postServices";

import colors from "../assets/colors";
import searchStyles from "../assets/styles/search.style";

import AreYouSure from "./components/areYouSure";
import BottomTabs from "./components/BottomTabs";
import PopUp from "./components/popUp";
import RenderLastSearchedUser from "./components/RenderLastSearchedUser";
import RenderPost from "./components/RenderPost";
import SearchHeader from "./components/SearchHeader";
import userPostData from "./components/userPostData";

import { Dimensions } from "react-native";
import { baseURL } from "../utils/constants";
import { getUserInfo } from "../utils/getUserInfo";
const { width } = Dimensions.get("window");

export default function SearchScreen({ navigation, route }) {
  const { uName, getCategory, type } = route.params;

  const scrollViewRef = useRef();
  const categoryScrollViewRef = useRef();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [focused, setFocused] = useState(false);
  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({ getCategory });

  useState(() => {
    if (type == "lastSearched") {
      console.log("lastSearched bölümüne geldi");
      setFocused(true);
    }
    else if (type == "discovery") {
      console.log("discovery bölümüne geldi");
      setFocused(false);
    }
    else {
      console.log("screen type error. Search.js")
      setFocused(false);
    }
  })

  {/*Coming Soon --->*/ }
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  {/*<--- Coming Soon */ }

  const handleScrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true })
  };

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 800)
  }

  const getPosts = async (res = null) => {
    setLoading(true);
    const response = await getExplorePosts({ page: 1, limit: 30, category: selectedCategory });

    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          userName: item.createdBy.username,
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: baseURL + item.createdBy.profilePhotoUrl,
          likesCount: 1451,
          commentCount: 12,
        }
      })

      setPosts(temp);
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getUserInfo().then(async (res) => {
      setUser(res);
      await getPosts(res);
    });
  }, [])

  if (loading) {
    return (
      <View style={{
        flex: 1, backgroundColor: "rgba(255, 255, 255, 0)",
        justifyContent: "center", alignItems: "center",
      }}>
        <ActivityIndicator size="large" color={colors.green} />
      </View>)
  }

  return (
    <SafeAreaView style={searchStyles.container}>

      <SearchHeader pressLogo={handleScrollToTop} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={openAreYouSure}
        onRequestClose={() => {
          setOpenAreYouSure(!openAreYouSure);
        }}
      >
        <AreYouSure process={"LogOut"} navigation={navigation}
          setOpenAreYouSure={setOpenAreYouSure} />
      </Modal>
      <View style={searchStyles.searchBarHolder}>
        {focused ? (
          <View style={{ flexDirection: "row", alignItems: "center", width: width, justifyContent: "center" }}>
            {/* Search Bar */}
            < TextInput
              placeholder="Search"
              style={[searchStyles.searchBar, { width: width * 0.78 }]}
              onChangeText={onChangeSearch}
              value={searchQuery}
            />

            {/* Close Button */}
            <TouchableOpacity onPress={() => setFocused(false)}
              style={searchStyles.closeButtonTouch}>
              <Icon type="font-awesome" size={28} name={"times"}
                style={searchStyles.closeButton} color={colors.green} />
            </TouchableOpacity>
          </View>
        ) :
          <View style={{ flexDirection: "column" }}>
            < TextInput
              placeholder="Search"
              style={[searchStyles.searchBar, { width: width * 0.9, marginLeft: width * 0.05 }]}
              onChangeText={onChangeSearch}
              value={searchQuery}
              onFocus={() => setFocused(true)}
            />

            {/* CATEGORIES */}
            <ScrollView ref={categoryScrollViewRef}
              horizontal showsHorizontalScrollIndicator={false}
              style={{ marginStart: width * 0.0125, marginEnd: width * 0.0125, paddingVertical: 10 }}>
              {
                userPostData.map((item, index) => {
                  return (
                    <TouchableOpacity onPress={() => setSelectedCategory(item.category)} key={index}>

                      <Text style={[searchStyles.SecondText,
                      { width: width * 0.3, marginHorizontal: width * 0.0125, },
                      selectedCategory == item.category ? {
                        borderWidth: 2, borderColor: colors.green,
                        backgroundColor: colors.white, color: colors.green
                      } : { backgroundColor: colors.green, color: colors.white }]}>#{item.category}</Text>

                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
          </View>
        }
      </View>

      {/* POSTS */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={searchStyles.scrollContainer}
        ref={scrollViewRef}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
        }
      >
        {focused ? (
          <RenderLastSearchedUser navigation={navigation} />
        ) :
          <RenderPost navigation={navigation} HeaderTitle={"SearchScreen"} posts={posts} />
        }
      </ScrollView>

      {visiblePopUp == true ? (
        <PopUp navigation={navigation} bottomSize={50} setOpenAreYouSure={setOpenAreYouSure} setVisiblePopUp={setVisiblePopUp} />
      ) : null}

      <BottomTabs navigation={navigation} userName={uName} visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp} pageName={"SearchScreen"} />
    </SafeAreaView>
  );
}
