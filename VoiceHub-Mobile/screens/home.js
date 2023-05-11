import { useIsFocused } from "@react-navigation/native";

import React, { useEffect, useRef, useState } from "react";
import { FlatList, Modal, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
//importing components
import HomeHeader from "./components/HomeHeader";
import PopUpPost from "./components/PopUpPost";
import RenderPost from "./components/RenderPost";
import AreYouSure from "./components/areYouSure";
import Loading from "./components/loading";

import { getMainPagePosts } from "../services/postServices";

//importing styles
import colors from "../assets/colors";
import homeStyles from "../assets/styles/home.style";

export default function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [openPopUpPost, setOpenPopUpPost] = useState(false);

  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
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
      setPosts(response?.data);
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [isFocused])

  if (loading) return <Loading />

  return (
    <SafeAreaView style={homeStyles.container}>
      <HomeHeader navigation={navigation} pressLogo={handleScrollToTop} />

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

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => pullThePage()}
            colors={[colors.green]}
          />
        }
        ListEmptyComponent={
          <View style={{ marginTop: "5%" }}>
            <Text
              style={{
                textAlign: "center",
                marginBottom: 20,
                color: colors.green,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              {"You are not following anyone yet :("}
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SearchScreen", {
                  getCategory: "all",
                  type: "discovery",
                });
              }}
            >
              <Text
                style={{
                  width: "60%",
                  marginLeft: "20%",
                  textAlign: "center",
                  marginBottom: 20,
                  color: colors.white,
                  fontWeight: "700",
                  fontSize: 16,
                  backgroundColor: colors.green,
                  borderRadius: 15,
                  paddingVertical: 10,
                }}
              >
                Discover now!
              </Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item, index }) => (
          <RenderPost
            navigation={navigation}
            HeaderTitle={"HomeScreen"}
            post={item}
            setOpenPopUpPost={setOpenPopUpPost}
          />
        )}
        contentContainerStyle={homeStyles.scroll}
      />

    </SafeAreaView>
  );
}