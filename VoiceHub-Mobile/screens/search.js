import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions, Modal, RefreshControl,
  SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View
} from "react-native";
import { Icon } from "react-native-elements";

import colors from "../assets/colors";
import searchStyles from "../assets/styles/search.style";

import AreYouSure from "./components/areYouSure";
import BottomTabs from "./components/BottomTabs";
import PopUp from "./components/ProfileBottomPopUp";
import RenderLastSearchedUser from "./components/RenderLastSearchedUser";
import RenderPost from "./components/RenderPost";
import SearchHeader from "./components/SearchHeader";

import { getExplorePosts, getTopCategories } from "../services/postServices";
import { searchUser } from "../services/userServices";
import { baseURL } from "../utils/constants";
import Loading from "./components/loading";
const { width } = Dimensions.get("window");

export default function SearchScreen({ navigation, route }) {
  const { username, getCategory, type } = route.params;

  const scrollViewRef = useRef();
  const categoryScrollViewRef = useRef();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState({});
  const [posts, setPosts] = useState([]);
  const [focused, setFocused] = useState(false);
  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(getCategory);
  const [categories, setCategories] = useState([]);

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

  const handleScrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true })
  };

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 800)
  }

  const getPosts = async () => {
    setLoading(true);
    const response = await getExplorePosts({ page: 1, limit: 30, category: selectedCategory });

    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          comments: item.comments,
          username: item.createdBy.username,
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: baseURL + item.createdBy.profilePhotoUrl,
          likes: item.likes,
          isLikesVisible: item.isLikesVisible,
          isLiked: true,

        }
      })
      setPosts(temp);
    }
    setLoading(false);
  }

  const getCategories = async () => {
    setLoading(true);
    const response = await getTopCategories(); //{success:true,message:"success",data:[{_id:"poem",count:3}]}

    if (response && response.success) {
      setCategories(response.data);  //[{_id:"poem",count:1}]
      await getPosts()
    }
    setLoading(false);
  }

  const onChangeSearch = async (searchQuery) => {
    const response = await searchUser({ search: searchQuery });

    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          name: item.name,
          username: item.username,
          userPic: baseURL + item.profilePhotoUrl,
          isSecretAccount: item.isSecretAccount,
          isTic: item.isTic,
        }
      })
      setUsers(temp);
    }
  }

  useEffect(() => {
    getCategories();
    setVisiblePopUp(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [selectedCategory]);

  useEffect(() => {
    onChangeSearch(searchQuery);
  }, [searchQuery])



  if (loading) return <Loading />

  return (
    <SafeAreaView style={searchStyles.container}>

      <SearchHeader pressLogo={handleScrollToTop} />

      <Modal
        visible={visiblePopUp}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setVisiblePopUp(false)
        }}>
        <PopUp navigation={navigation} setOpenAreYouSure={setOpenAreYouSure}
          setVisiblePopUp={setVisiblePopUp} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openAreYouSure}
        onRequestClose={() => {
          setOpenAreYouSure(false);
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
              onChangeText={(e) => console.log(e)}
              value={searchQuery}
            />

            {/* Close Button */}
            <TouchableOpacity onPress={() => setFocused(false)}
              style={searchStyles.closeButtonTouch}>
              <Icon type="font-awesome" size={width * 0.08} name={"times"} color={colors.green} />
            </TouchableOpacity>
          </View>
        ) :
          <View style={{ flexDirection: "column" }}>
            < TextInput
              placeholder="Search"
              style={[searchStyles.searchBar, { width: width * 0.9, marginLeft: width * 0.05 }]}
              onChangeText={(searchQuery) => setSearchQuery(searchQuery)}
              value={searchQuery}
              onFocus={() => setFocused(true)}
            />

            {/* CATEGORIES */}
            <ScrollView ref={categoryScrollViewRef}
              horizontal showsHorizontalScrollIndicator={false}
              style={{ marginStart: width * 0.0125, marginEnd: width * 0.0125, paddingVertical: 10 }}>

              <TouchableOpacity onPress={() => setSelectedCategory("all")} key={"all"}>
                <Text style={[searchStyles.SecondText,
                { width: width * 0.3, marginHorizontal: width * 0.0125, },
                selectedCategory == "all" ? {
                  borderWidth: 2, borderColor: colors.green,
                  backgroundColor: colors.white, color: colors.green
                } : { borderWidth: 2, borderColor: colors.green, backgroundColor: colors.green, color: colors.white }]}>#all</Text>

              </TouchableOpacity>

              {
                categories.map((item, index) => {
                  return (
                    <TouchableOpacity onPress={() => setSelectedCategory(item._id)} key={index}>
                      <Text style={[searchStyles.SecondText,
                      { width: width * 0.3, marginHorizontal: width * 0.0125, },
                      selectedCategory == item._id ? {
                        borderWidth: 2, borderColor: colors.green,
                        backgroundColor: colors.white, color: colors.green
                      } : { borderWidth: 2, borderColor: colors.green, backgroundColor: colors.green, color: colors.white }]}>#{item._id}</Text>

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
          <RenderLastSearchedUser navigation={navigation} users={users} />
        ) :
          <RenderPost navigation={navigation} HeaderTitle={"SearchScreen"} posts={posts} />
        }
      </ScrollView>

      <BottomTabs navigation={navigation} username={username} setVisiblePopUp={setVisiblePopUp} />
    </SafeAreaView>
  );
}
