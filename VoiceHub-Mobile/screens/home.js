import React, { useEffect, useRef, useState } from "react";
import { Modal, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
//importing components
import AreYouSure from "./components/areYouSure";
import BottomTabs from "./components/BottomTabs";
import HomeHeader from "./components/HomeHeader";
import PopUp from "./components/ProfileBottomPopUp";
import RenderPost from "./components/RenderPost";

import { getMainPagePosts } from "../services/postServices";
import { baseURL } from "../utils/constants";

//importing styles
import colors from "../assets/colors";
import homeStyles from "../assets/styles/home.style";
import Loading from "./components/loading";
import { useUser } from "../utils/userContext";

export default function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useUser();
  const scrollViewRef = useRef();

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
    const response = await getMainPagePosts({ page: 1, limit: 20 });
    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          comments: item.comments,
          username: item.createdBy.username,
          createdBy: item.createdBy,
          isTic: item.createdBy.isTic,
          createdAt: item.createdAt,
          userPic: baseURL + item.createdBy.profilePhotoUrl,
          likes: item.likes,
          isLikesVisible: item.isLikesVisible,

        }
      });
      setPosts(temp);
      console.log("kaaaan", temp?.isTic)
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [isFocused])

  useEffect(() => {
    setVisiblePopUp(false);
  }, [])

  if (loading) return <Loading />

  return (
    <SafeAreaView style={homeStyles.container}>
      <HomeHeader navigation={navigation} pressLogo={handleScrollToTop} username={user?.username} />

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

      <ScrollView style={homeStyles.scroll} ref={scrollViewRef} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
      }
      >
        {/* Users Posts */}
        {posts?.length > 0 ? (
          <RenderPost navigation={navigation} HeaderTitle={"HomeScreen"} posts={posts} />
        ) :
          <View style={{ marginTop: "5%" }}>
            <Text style={
              { textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16 }
            }>
              {"You are not following anyone yet :("}
            </Text>

            <TouchableOpacity onPress={() => { navigation.navigate("SearchScreen", { username: user?.username, getCategory: "all", type: "discovery" }) }}>
              <Text style={
                { width: "60%", marginLeft: "20%", textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16, backgroundColor: colors.green, borderRadius: 15, paddingVertical: 10, }}>
                Discover now!
              </Text>
            </TouchableOpacity>
          </View>
        }
      </ScrollView>

      <BottomTabs navigation={navigation} username={user?.username}
        visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp} />
    </SafeAreaView>
  );
}