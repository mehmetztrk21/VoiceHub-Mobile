import { useIsFocused } from "@react-navigation/native";

import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Modal, RefreshControl, SafeAreaView, Text, TouchableOpacity, View, BackHandler } from "react-native";
//importing components
import HomeHeader from "./components/HomeHeader";
import PopUpPost from "./components/PopUpPost";
import RenderPost from "./components/RenderPost";
import AreYouSure from "./components/areYouSure";
import Loading from "./components/loading";
const { height } = Dimensions.get("window");

import { getMainPagePosts } from "../services/postServices";
import { useUser } from "../utils/userContext";
//importing styles
import colors from "../assets/colors";
import homeStyles from "../assets/styles/home.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AwesomeAlert from "react-native-awesome-alerts";

export default function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();
  const { user, setUser } = useUser();

  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [openPopUpPost, setOpenPopUpPost] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const getPosts = async () => {
    const response = await getMainPagePosts({ page: 1, limit: 20 });
    if (response && response.success) {
      setPosts(response?.data);
    }
    else {
      if (response?.message == "Unauthorized") {
        await AsyncStorage.clear();
        navigation.navigate("Login");
      }
    }
    setLoading(false);
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

    const backAction = () => {
      handleScrollToTop();
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();

  }, [])

  useEffect(() => {
    if (isFocused == true) {
      setLoading(true)
      getPosts();
    }
  }, [isFocused])

  useEffect(() => {
    if (refreshing == true) {
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
        <PopUpPost navigation={navigation} id={openPopUpPost} setId={setOpenPopUpPost} uri={"https://github.com/mehmetztrk21/VoiceHub-Mobile/"} />
      </Modal>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={homeStyles.scroll}
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
        renderItem={({ item }) => (
          <RenderPost
            key={item.id}
            navigation={navigation}
            HeaderTitle={"HomeScreen"}
            post={item}
            setOpenPopUpPost={setOpenPopUpPost}
          />
        )}
      />

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        message={alertMessage}
        messageStyle={{
          fontSize: 16,
          fontWeight: "500",
          color: colors.darkGray,
        }}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Okay"
        confirmButtonTextStyle={{ textAlign: "center", fontWeight: "600", fontSize: 16 }}
        confirmButtonStyle={{
          backgroundColor: colors.green,
          borderRadius: 30,
          width: "50%",
          marginTop: "5%",
        }}
        contentContainerStyle={{ borderRadius: 20 }}
        onConfirmPressed={() => {
          setShowAlert(false)
        }}
        onDismiss={() => setShowAlert(false)}
      />

    </SafeAreaView>
  );
}