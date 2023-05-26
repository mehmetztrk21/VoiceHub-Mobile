import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Modal, RefreshControl, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import ArchivePopUp from "./components/archivePopUp";
import OtherHeader from './components/otherHeader';
import RenderPost from "./components/RenderPost";

import savedStyle from "../assets/styles/saved.style";

import { getMyPosts, getSavedPosts } from "../services/postServices";

import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../assets/colors';

import { useUser } from '../utils/userContext';

import Loading from './components/loading';
import PopUpPost from './components/PopUpPost';

const { width, height } = Dimensions.get("window");

export default function SavedArchieves({ navigation, route }) {
  const { HeaderTitle } = route.params;

  const { user } = useUser();

  const [openArchivePopUp, setOpenArchivePopUp] = useState(false)
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [openPopUpPost, setOpenPopUpPost] = useState(false);

  const getPosts = async () => {
    if (HeaderTitle == "Archived") {
      const response = await getMyPosts({ isArchived: true, userId: user?._id });

      if (response && response.success) {
        setPosts(response?.data);
      }
      else {
        if (response?.message == "Unauthorized") {
          await AsyncStorage.clear();
          navigation.navigate("Login");
        }
      }
    }
    else if (HeaderTitle == "Saved") {
      const response = await getSavedPosts({ page: 1, limit: 20 });
      if (response && response.success) {
        setPosts(response?.data);
      }
      else {
        if (response?.message == "Unauthorized") {
          await AsyncStorage.clear();
          navigation.navigate("Login");
        }
      }
    }
    else {
      console.error(err)
    }
    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [])

  useEffect(() => {
    if (refreshing) {
      getPosts();
    }
  }, [refreshing])

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [openArchivePopUp])

  if (loading) return <Loading />


  return (
    <SafeAreaView style={savedStyle.container}>

      <OtherHeader HeaderTitle={HeaderTitle} navigation={navigation} isTic={false} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={openArchivePopUp ? true : false}
        onRequestClose={() => {
          setOpenArchivePopUp(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setOpenArchivePopUp(false)}>
          <View style={{ flex: 1, position: "absolute", width: width, height: height }} />
        </TouchableWithoutFeedback>
        <ArchivePopUp id={openArchivePopUp} setId={setOpenArchivePopUp} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openPopUpPost ? true : false}
        onRequestClose={() => { setOpenPopUpPost(false) }}
      >
        <PopUpPost navigation={navigation} id={openPopUpPost} setId={setOpenPopUpPost} uri={"https://github.com/mehmetztrk21/VoiceHub-Mobile/"} />
      </Modal>

      {(HeaderTitle == "Archived" && posts?.length == 0) ? (
        <View style={{ marginTop: 200 }}>
          <Text style={
            { textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16 }
          }>
            {"You have not archived post anyone yet."}
          </Text>
        </View>
      ) : (HeaderTitle == "Saved" && posts?.length == 0) ? (
        <View style={{ marginTop: 200 }}>
          <Text style={
            { textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16 }
          }>
            {"You have not saved post anyone yet :("}
          </Text>

          <TouchableOpacity onPress={() => { navigation.navigate("SearchScreen", { getCategory: "all", type: "discovery" }) }}>
            <Text style={
              { width: "60%", marginLeft: "20%", textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16, backgroundColor: colors.green, borderRadius: 15, paddingVertical: 10, }}>
              Discover now!
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={{
        marginTop: width * 0.25,
        marginBottom: 65
      }}>
        <FlatList
          data={posts}
          keyExtractor={(index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true) }} colors={[colors.green]} progressViewOffset={height * 0.15} />
          }
          renderItem={({ item, index }) => (
            HeaderTitle == "Saved" ?
              <RenderPost navigation={navigation} HeaderTitle={HeaderTitle} key={index}
                setOpenArchivePopUp={setOpenArchivePopUp} post={item} setOpenPopUpPost={setOpenPopUpPost} /> :

              <RenderPost navigation={navigation} HeaderTitle={HeaderTitle}
                setOpenArchivePopUp={setOpenArchivePopUp} post={item} key={index} />

          )}
        />
      </View>

    </SafeAreaView>
  );
}