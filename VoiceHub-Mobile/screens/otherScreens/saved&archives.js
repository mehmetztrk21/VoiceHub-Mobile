import React, { useEffect, useRef, useState } from 'react';
import { Modal, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import ArchivePopUp from "../components/archivePopUp";
import OtherHeader from '../components/otherHeader';
import RenderPost from "../components/RenderPost";

import savedStyle from "../../assets/styles/saved.style";

import { getMyPosts, getSavedPosts } from "../../services/postServices";

import { Dimensions } from "react-native";
import colors from '../../assets/colors';
import { baseURL } from '../../utils/constants';
import Loading from '../components/loading';
const { width } = Dimensions.get("window");

export default function SavedArchieves({ navigation, route }) {
  const { username, HeaderTitle, id } = route.params;

  const scrollViewRef = useRef();

  const handleLayout = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const [openArchivePopUp, setOpenArchivePopUp] = useState(false)
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 800)
  }

  const getPosts = async () => {
    setLoading(true);
    if (HeaderTitle == "Archived") {
      const response = await getMyPosts({ isArchived: true, userId: id });

      if (response && response.success) {
        let temp = response.data.map((item) => {
          return {
            id: item._id,
            contentUrl: item.contentUrl,
            categories: item.categories,
            username: username,
            createdBy: item.createdBy,
            createdAt: item.createdAt,
            userPic: baseURL + item.createdBy.profilePhotoUrl,
            likes: item.likes,
            comments: item.comments,
          }
        })
        setPosts(temp);
      }
    }
    else if (HeaderTitle == "Saved") {
      const response = await getSavedPosts({ page: 1, limit: 20 });
      if (response && response.success) {
        let temp = response.data.map((item) => {
          return {
            id: item._id,
            contentUrl: item.contentUrl,
            categories: item.categories,
            username: username,
            createdBy: item.createdBy,
            createdAt: item.createdAt,
            userPic: baseURL + item.createdBy.profilePhotoUrl,
            likes: item.likes,
            comments: item.comments,
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

  if (loading) return <Loading />


  return (
    <SafeAreaView style={savedStyle.container}>

      <OtherHeader HeaderTitle={HeaderTitle} navigation={navigation} isVerify={false}/>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openArchivePopUp ? true : false}
        onRequestClose={() => {
          setOpenArchivePopUp(false);
        }}
      >
        <ArchivePopUp id={openArchivePopUp} setId={setOpenArchivePopUp} />
      </Modal>

      {(HeaderTitle == "Archived" && posts?.length == 0) ? (
        <View style={{ marginTop: 200 }}>
          <Text style={
            { textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16 }
          }>
            {"You have not archived post anyone yet :("}
          </Text>
        </View>
      ) : (HeaderTitle == "Saved" && posts?.length == 0) ? (
        <View style={{ marginTop: 200 }}>
          <Text style={
            { textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16 }
          }>
            {"You have not saved post anyone yet :("}
          </Text>

          <TouchableOpacity onPress={() => { navigation.navigate("SearchScreen", { username: username, getCategory: "all", type: "discovery" }) }}>
            <Text style={
              { width: "60%", marginLeft: "20%", textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16, backgroundColor: colors.green, borderRadius: 15, paddingVertical: 10, }}>
              Discover now!
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={{ marginTop: width * 0.04 }}>

        <ScrollView style={savedStyle.savedPostContainer} ref={scrollViewRef} onLayout={handleLayout}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
          } >
          <RenderPost navigation={navigation} HeaderTitle={HeaderTitle}
            setOpenArchivePopUp={setOpenArchivePopUp} posts={posts} />
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}