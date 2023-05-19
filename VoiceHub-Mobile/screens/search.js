import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Modal, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const { width, height } = Dimensions.get("window");

export default function SearchScreen({ navigation, route }) {
  const { getCategory, type } = route.params;

  const isFocused = useIsFocused();
  const scrollViewRef = useRef();
  const inputRef = useRef();
  const categoryScrollViewRef = useRef();

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [openPopUpPost, setOpenPopUpPost] = useState(false);
  const [loading, setLoading] = useState(false);

  const [focused, setFocused] = useState(false);
  const [openAreYouSure, setOpenAreYouSure] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(getCategory);
  const [categories, setCategories] = useState([]);
  const [endScreen, setEndScreen] = useState(false);
  const [renderCount, setRenderCount] = useState(1);

  const handleFlatlistEndReached = () => {
    if (endScreen == false) {
      setEndScreen(true);
      setRenderCount(prevCount => prevCount + 1);
    }
  };

  const handleScrollToTop = () => {
    categoryScrollViewRef.current.scrollTo({ x: 0, animated: true });
    scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const getPosts = async () => {
    const response = await getExplorePosts({ page: renderCount, limit: 15, category: selectedCategory });

    if (response && response.success) {
      let post = [...posts, ...(response?.data)];
      setPosts(post);
    } else {
      if (response?.message === "Unauthorized") {
        await AsyncStorage.clear();
        navigation.navigate("Login");
      }
    }
    setLoading(false);
    setRefreshing(false);
    setEndScreen(false);
  };

  const getCategories = async () => {
    const response = await getTopCategories(); //{success:true,message:"success",data:[{_id:"poem",count:3}]}

    if (response && response.success) {

      setCategories(response?.data)//[{_id:"poem",count:1}]
    } else {
      if (response?.message === "Unauthorized") {
        await AsyncStorage.clear();
        navigation.navigate("Login");
      }
    }
  };

  const onChangeSearch = async () => {
    if (searchQuery.trim() !== "") {
      const response = await searchUser({ search: searchQuery });
      if (response && response.success) {
        setUsers(response?.data);
      } else {
        if (response?.message === "Unauthorized") {
          await AsyncStorage.clear();
          navigation.navigate("Login");
        }
      }
    }
  };

  useEffect(() => {
    if (type === "lastSearched") {
      console.log("lastSearched bölümüne geldi");
      setFocused(true);
    } else if (type === "discovery") {
      console.log("discovery bölümüne geldi");
      setFocused(false);
    } else {
      console.log("screen type error. Search.js");
      setFocused(false);
    }

    if (isFocused == true) {
      setLoading(true);
      setEndScreen(false);
      setRenderCount(1);
      getCategories();
      getPosts();
    }
  }, [isFocused, selectedCategory]);

  useEffect(() => {
    if (refreshing == true) {
      setEndScreen(false);
      setRenderCount(1);
      getCategories();
      getPosts();
    }
  }, [refreshing]);

  useEffect(() => {
    getPosts();
  }, [endScreen])

  useEffect(() => {
    onChangeSearch();
  }, [searchQuery]);

  if (loading) return <Loading />;

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
        <AreYouSure process={"LogOut"} navigation={navigation} setOpenAreYouSure={setOpenAreYouSure} openAreYouSure={openAreYouSure} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openPopUpPost ? true : false}
        onRequestClose={() => {
          setOpenPopUpPost(false);
        }}
      >
        <PopUpPost navigation={navigation} id={openPopUpPost} setId={setOpenPopUpPost} uri={"https://github.com/mehmetztrk21/VoiceHub-Mobile/"} />
      </Modal>

      {/* SEARCHBAR */}
      <View
        style={{
          backgroundColor: "lightgray",
          borderRadius: 25,
          paddingHorizontal: "3%",
          width: "90%",
          marginLeft: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: height * 0.1,
          marginBottom: height * 0.015,
        }}
      >
        {/* Search Bar */}
        <TextInput
          placeholder="Search"
          ref={inputRef}
          style={[
            focused === true
              ? {
                width: "81%",
                backgroundColor: colors.lightgray,
                borderRadius: 22.5,
                paddingVertical: 10,
                paddingHorizontal: 12.5,
              }
              : {
                width: "90%",
                backgroundColor: colors.lightgray,
                borderRadius: 22.5,
                paddingVertical: 10,
                paddingHorizontal: 12.5,
              },
          ]}
          onChangeText={(searchQuery) => setSearchQuery(searchQuery)}
          value={searchQuery}
          onFocus={() => setFocused(true)}
        />

        {/* Close Button */}
        {focused === true ? (
          <TouchableOpacity
            onPress={() => {
              setFocused(false);
              setSearchQuery("");
              inputRef.current.blur();
            }}
            style={searchStyles.closeButtonTouch}
          >
            <Icon type="font-awesome" size={20} name={"times"} color={colors.green} />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* CATEGORIES */}
      {focused === false ? (
        <ScrollView ref={categoryScrollViewRef}
          horizontal showsHorizontalScrollIndicator={false}
          style={{ marginStart: width * 0.0125, marginEnd: width * 0.0125, marginVertical: 5 }}>

          <TouchableOpacity onPress={() => setSelectedCategory("all")} key={"all"}>
            <Text style={[searchStyles.SecondText,
            { width: width * 0.3, marginHorizontal: width * 0.0125, },
            selectedCategory == "all" ? {
              borderWidth: 2, borderColor: colors.green,
              backgroundColor: colors.white, color: colors.green
            } : { borderWidth: 2, borderColor: colors.green, backgroundColor: colors.green, color: colors.white }]}>#all</Text>

          </TouchableOpacity>

          {categories.map((item, index) => {
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
          })}
        </ScrollView>
      ) : null}

      {/* POSTS */}
      {focused === true ? (
        searchQuery.length !== 0 ? (
          <FlatList
            data={users}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={searchStyles.scrollContainer}
            ref={scrollViewRef}
            renderItem={({ item, index }) => <RenderLastSearchedUser navigation={navigation} thisUser={item} title={"search"} />}
          />
        ) : (
          <RenderLastSearchedUser navigation={navigation} title={"last"} />
        )
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          initialNumToRender={15}
          onEndReached={handleFlatlistEndReached}
          contentContainerStyle={[searchStyles.scrollContainer, { paddingBottom: height * 0.075 }]}
          ref={scrollViewRef}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} colors={[colors.green]} />}
          renderItem={({ item, index }) => (
            <RenderPost navigation={navigation} HeaderTitle={"SearchScreen"} post={item} setOpenPopUpPost={setOpenPopUpPost} />
          )}
        />
      )}
    </SafeAreaView>
  );
}