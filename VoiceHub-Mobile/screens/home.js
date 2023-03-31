import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, RefreshControl, View, ActivityIndicator, Text } from "react-native";

//importing components
import AreYouSure from "./components/areYouSure";
import BottomTabs from "./components/BottomTabs";
import HomeHeader from "./components/HomeHeader";
import PopUp from "./components/popUp";
import RenderPost from "./components/RenderPost";

import { getMainPagePosts } from "../services/postServices";

//importing styles
import homeStyles from "../assets/styles/home.style";
import colors from "../assets/colors";
import { baseURL } from "../utils/constants";
import { TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation, route }) {
  const { uName } = route.params;

  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([]);

  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true })
  };

  const [refreshing, setRefreshing] = useState(false);

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
          userName: item.createdBy.username,
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: baseURL + item.createdBy.profilePhotoUrl,
          likesCount: 1451,
          showLike: true,
          isSaved: false,
          isLiked: true,
          commentCount: 12,
        }
      });
      setPosts(temp);
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
        justifyContent: "center", alignItems: "center",
      }}>
        <ActivityIndicator size="large" color={colors.green} />
      </View>
    )
  }

  return (
    <SafeAreaView style={homeStyles.container}>
      <HomeHeader navigation={navigation} pressLogo={handleScrollToTop} uName={uName} />

      <ScrollView style={homeStyles.scroll} ref={scrollViewRef} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
      }
      >
        {/* User Posts */}
        {posts?.length > 0 ? (
          <RenderPost navigation={navigation} HeaderTitle={"HomeScreen"} posts={posts} />
        ) :
          <View style={{ marginTop: "5%" }}>
            <Text style={
              { textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16 }
            }>
              {"You are not following anyone yet :("}
            </Text>

            <TouchableOpacity onPress={() => { navigation.navigate("SearchScreen", { uName: uName, getCategory: "all", type: "discovery" }) }}>
              <Text style={
                { width: "60%", marginLeft: "20%", textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16, backgroundColor: colors.green, borderRadius: 15, paddingVertical: 10, }}>
                Discover now!
              </Text>
            </TouchableOpacity>
          </View>
        }
      </ScrollView>

      {visiblePopUp == true ? (
        <PopUp navigation={navigation} bottomSize={50} setOpenAreYouSure={setOpenAreYouSure} setVisiblePopUp={setVisiblePopUp} />
      ) : openAreYouSure == true ? (
        <AreYouSure process={"LogOut"} navigation={navigation} setOpenAreYouSure={setOpenAreYouSure} />
      ) : null}

      <BottomTabs navigation={navigation} userName={uName}
        visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp}
        pageName={"HomeScreen"} />
    </SafeAreaView>
  );
}