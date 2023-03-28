import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';

import ArchivePopUp from "../components/archivePopUp";
import OtherHeader from '../components/otherHeader';
import RenderPost from "../components/RenderPost";

import savedStyle from "../../assets/styles/saved.style";

import { getMyPosts, getSavedPosts } from "../../services/postServices";

import { Dimensions } from "react-native";
import colors from '../../assets/colors';
const { width } = Dimensions.get("window");

export default function SavedArchieves({ navigation, route }) {

  const scrollViewRef = useRef();

  const handleLayout = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const [refreshing, setRefreshing] = useState(false);

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 800)
  }

  const { HeaderTitle } = route.params;

  const [openArchivePopUp, setOpenArchivePopUp] = useState(false)
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    if (HeaderTitle == "Archived") {
      const response = await getMyPosts({ isArchived: true });
      console.log(response)
      if (response && response.success) {
        let temp = response.data.map((item) => {
          console.log(item.categories, "item.categories");
          return {
            contentUrl: item.contentUrl,
            categories: item.categories,
            userName: "Mehmet",
            createdBy: item.createdBy,
            createdAt: item.createdAt,
            userPic: "user1",
            likesCount: 1451,
            caption: "Coffee is the most imp part of my life !",
            type: "sender",
            visible: true,
            category: "all",
            showLike: false,
            isSaved: false,
            isLiked: true,
            date: "12/02/2023 12:41",
            isYourFollower: true,
            isYouFollowing: true,
            commentCount: 12,
            hasBio: false,
            isVerify: false,
          }
        })

        setPosts(temp);
      }
    }
    else if (HeaderTitle == "Saved") {
      const response = await getSavedPosts({ page: 1, limit: 20 });
      console.log(response)
      if (response && response.success) {
        let temp = response.data.map((item) => {
          console.log(item.categories, "item.categories");
          return {
            contentUrl: item.contentUrl,
            categories: item.categories,
            userName: "Mehmet",
            createdBy: item.createdBy,
            createdAt: item.createdAt,
            userPic: "user1",
            likesCount: 1451,
            caption: "Coffee is the most imp part of my life !",
            type: "sender",
            visible: true,
            category: "all",
            showLike: false,
            isSaved: false,
            isLiked: true,
            date: "12/02/2023 12:41",
            isYourFollower: true,
            isYouFollowing: true,
            commentCount: 12,
            hasBio: false,
            isVerify: false,
          }
        })

        setPosts(temp);
      }
    }
    else {
      console.error(err)
    }

    setLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, [])

  if (loading) {
    return (
      <View style={{
        flex: 1, backgroundColor: "rgba(255, 255, 255, 0)",
        justifyContent: "center", alignItems: "center"
      }}>
        <ActivityIndicator size="large" color={colors.green} />
      </View>)
  }


  return (
    <SafeAreaView style={savedStyle.container}>

      <OtherHeader HeaderTitle={HeaderTitle} navigation={navigation} />
      <View style={{ marginTop: width * 0.04 }}>

        <ScrollView style={savedStyle.savedPostContainer} ref={scrollViewRef} onLayout={handleLayout}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
          } >
          <RenderPost navigation={navigation} HeaderTitle={HeaderTitle} setOpenArchivePopUp={setOpenArchivePopUp} posts={posts} />
        </ScrollView>

        {
          openArchivePopUp == true ? (
            <ArchivePopUp />
          ) : null
        }

      </View>
    </SafeAreaView>
  );
}