import { useIsFocused } from "@react-navigation/native";

import React, { useEffect, useRef, useState } from "react";
import {
  BackHandler, Dimensions, FlatList, Modal, RefreshControl, SafeAreaView,
  Text, TouchableOpacity, TouchableWithoutFeedback, View
} from "react-native";
//importing components
import HomeHeader from "./components/HomeHeader";
import PopUpPost from "./components/PopUpPost";
import RenderPost from "./components/RenderPost";
import AreYouSure from "./components/areYouSure";
import Loading from "./components/loading";

const { height, width } = Dimensions.get("window");
import { getMainPagePosts } from "../services/postServices";

import { checkInternetConnection } from "../utils/NetworkUtils"
import { useUser } from "../utils/userContext";
//importing styles
import AsyncStorage from "@react-native-async-storage/async-storage";
import Alert from "./components/alert";

import colors from "../assets/colors";
import homeStyles from "../assets/styles/home.style";

export default function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();
  const { user, setUser } = useUser();

  const scrollViewRef = useRef();

  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [openPopUpPost, setOpenPopUpPost] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [endScreen, setEndScreen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [renderCount, setRenderCount] = useState(1);

  const handleFlatlistEndReached = () => {
    if (endScreen == false) {
      setEndScreen(true);
      setRenderCount(prevCount => prevCount + 1);
    }
  };


  const handleScrollToTop = () => {
    scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const getPosts = async () => {
    if (isFinished) {
      return;
    }
    checkInternetConnection(setShowAlert, setAlertMessage, setRefreshing, setLoading);
    const response = await getMainPagePosts({ page: renderCount, limit: 15 });
    if (response && response.success) {
      if (response.data.length > 0) {
        let post = [...posts, ...(response?.data)];
        setPosts(post);
      }
      else {
        setIsFinished(true)
      }

    }
    else {
      if (response?.message == "Unauthorized") {
        await AsyncStorage.clear();
        navigation.navigate("Login");
      }
    }
    setLoading(false);
    setEndScreen(false);
    setRefreshing(false);
  }

  useEffect(() => {
    if (user?.reActive) {
      setAlertMessage("Welcome again " + user?.username)
      setShowAlert(true)
      let temp = { ...user };
      temp.reActive = false;
      setUser(temp);
      AsyncStorage.setItem("user", JSON.stringify(temp));
    }
    if (user?.isNew == true) {
      setAlertMessage("Welcome " + user?.username + "!")
      setShowAlert(true)

    }

    const backAction = () => {
      handleScrollToTop();
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();

  }, [])

  useEffect(() => {
    if (endScreen) {
      getPosts();
    }
  }, [endScreen])

  useEffect(() => {
    if (isFocused == true) {
      setLoading(true)
      getPosts();
    }
  }, [isFocused])

  useEffect(() => {
    if (refreshing == true) {
      setEndScreen(false);
      setIsFinished(false);
      setRenderCount(1);
      getPosts();
    }
  }, [refreshing])

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
        <AreYouSure process={"LogOut"} navigation={navigation} setOpenAreYouSure={setOpenAreYouSure} openAreYouSure={openAreYouSure} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openPopUpPost ? true : false}
        onRequestClose={() => { setOpenPopUpPost(false) }}
      >
        <TouchableWithoutFeedback onPress={() => setOpenPopUpPost(false)}>
          <View style={{ flex: 1, position: "absolute", width: width, height: height }} />
        </TouchableWithoutFeedback>
        <PopUpPost navigation={navigation} id={openPopUpPost} setId={setOpenPopUpPost} uri={"https://github.com/mehmetztrk21/VoiceHub-Mobile/"} />
      </Modal>

      <FlatList
        data={posts}
        keyExtractor={(index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={[homeStyles.scroll, { paddingBottom: height * 0.2 }]}
        initialNumToRender={15}
        onEndReached={handleFlatlistEndReached}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true) }} colors={[colors.green]} progressViewOffset={height * 0.15} />
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
            key={index}
            navigation={navigation}
            HeaderTitle={"HomeScreen"}
            post={item}
            setOpenPopUpPost={setOpenPopUpPost}

          />
        )}
      />

      <Alert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />

    </SafeAreaView>
  );
}