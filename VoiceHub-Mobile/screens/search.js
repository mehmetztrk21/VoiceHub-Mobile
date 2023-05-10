import { useIsFocused } from "@react-navigation/native";

import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Modal,
  RefreshControl,
  SafeAreaView,
  ScrollView, Text, TextInput, TouchableOpacity, View
} from "react-native";
import { Icon } from "react-native-elements";

import colors from "../assets/colors";
import searchStyles from "../assets/styles/search.style";

import PopUpPost from "./components/PopUpPost";
import RenderLastSearchedUser from "./components/RenderLastSearchedUser";
import RenderPost from "./components/RenderPost";
import SearchHeader from "./components/SearchHeader";
import AreYouSure from "./components/areYouSure";
import Loading from "./components/loading";

import { getExplorePosts, getTopCategories } from "../services/postServices";
import { searchUser } from "../services/userServices";
const { width } = Dimensions.get("window");

export default function SearchScreen({ navigation, route }) {
  const { getCategory, type } = route.params;

  const isFocused = useIsFocused();
  const scrollViewRef = useRef();
  const categoryScrollViewRef = useRef();

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [openPopUpPost, setOpenPopUpPost] = useState(false);
  const [loading, setLoading] = useState(false);

  const [focused, setFocused] = useState(false);
  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(getCategory);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
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
  }, [isFocused])

  const handleScrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
    categoryScrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 800)
  }

  const getPosts = async () => {
    setLoading(true);
    const response = await getExplorePosts({ page: 1, limit: 30, category: selectedCategory });

    if (response && response.success) {
      setPosts(response?.data);
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
  }

  const onChangeSearch = async () => {
    if (searchQuery.trim() !== "") {
      const response = await searchUser({ search: searchQuery });
      if (response && response.success) {
        setUsers(response?.data);
      }
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getPosts();
  }, [selectedCategory]);

  useEffect(() => {
    onChangeSearch();
  }, [searchQuery])

  if (loading) return <Loading />

  return (
    <SafeAreaView style={searchStyles.container}>
      <SearchHeader pressLogo={handleScrollToTop} />

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

      <Modal
        animationType="slide"
        transparent={true}
        visible={openPopUpPost ? true : false}
        onRequestClose={() => { setOpenPopUpPost(false) }}
      >
        <PopUpPost id={openPopUpPost} setId={setOpenPopUpPost} uri={"https://github.com/mehmetztrk21/VoiceHub-Mobile/"} />
      </Modal>

      <View style={searchStyles.searchBarHolder}>
        {focused ? (
          <View style={{
            backgroundColor: "lightgray",
            borderRadius: 25,
            paddingHorizontal: "3%",
            width: "90%",
            marginLeft: "5%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>

            {/* Search Bar */}
            < TextInput
              placeholder="Search"
              style={[searchStyles.searchBar, { width: "90%" }]}
              onChangeText={(searchQuery) => setSearchQuery(searchQuery)}
              value={searchQuery}
            />

            {/* Close Button */}
            <TouchableOpacity onPress={() => { setFocused(false); setSearchQuery(""); }}
              style={searchStyles.closeButtonTouch}>
              <Icon type="font-awesome" size={20} name={"times"} color={colors.green} />
            </TouchableOpacity>
          </View>
        ) :
          <View style={{ flexDirection: "column" }}>
            <View style={{
              backgroundColor: "lightgray",
              borderRadius: 25,
              paddingHorizontal: "3%",
              width: "90%",
              marginLeft: "5%",
            }}>
              < TextInput
                placeholder="Search"
                style={[searchStyles.searchBar, { width: "90%", }]}
                onChangeText={(searchQuery) => setSearchQuery(searchQuery)}
                value={searchQuery}
                onFocus={() => setFocused(true)}
              />
            </View>

            {/* CATEGORIES */}
            <FlatList
              ref={categoryScrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginStart: width * 0.0125, marginEnd: width * 0.0125, paddingVertical: 10 }}
              data={[{ _id: "all" }, ...categories]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setSelectedCategory(item._id)}>
                  <Text
                    style={[
                      searchStyles.SecondText,
                      { width: width * 0.3, marginHorizontal: width * 0.0125 },
                      selectedCategory == item._id
                        ? {
                          borderWidth: 2,
                          borderColor: colors.green,
                          backgroundColor: colors.white,
                          color: colors.green,
                        }
                        : {
                          borderWidth: 2,
                          borderColor: colors.green,
                          backgroundColor: colors.green,
                          color: colors.white,
                        },
                    ]}
                  >
                    #{item._id}
                  </Text>
                </TouchableOpacity>
              )}
            />

          </View>
        }
      </View>

      {/* POSTS */}

      {focused == true ?
        (searchQuery.length !== 0 ?
          (<FlatList
            data={users}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            style={searchStyles.scrollContainer}
            ref={scrollViewRef}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
            }
            renderItem={({ item }) => (
              <RenderLastSearchedUser navigation={navigation} thisUser={item} title={"search"} />
            )}
          />) :
          (<RenderLastSearchedUser navigation={navigation} title={"last"} />)
        ) :
        <FlatList
          data={posts}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={searchStyles.scrollContainer}
          ref={scrollViewRef}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
          }
          renderItem={({ item }) => (
            <RenderPost navigation={navigation} HeaderTitle={"SearchScreen"} post={item} setOpenPopUpPost={setOpenPopUpPost} />
          )}
        />

      }
    </SafeAreaView>
  );
}
/**/