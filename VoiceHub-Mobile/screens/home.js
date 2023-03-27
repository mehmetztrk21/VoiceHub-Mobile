import React, { useRef, useState } from "react";
import { SafeAreaView, ScrollView, RefreshControl } from "react-native";

//importing components
import AreYouSure from "./components/areYouSure";
import BottomTabs from "./components/BottomTabs";
import HomeHeader from "./components/HomeHeader";
import PopUp from "./components/popUp";
import RenderPost from "./components/RenderPost";

//importing styles
import homeStyles from "../assets/styles/home.style";
import colors from "../assets/colors";

export default function HomeScreen({ navigation, route }) {
  const { uName } = route.params;

  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [openAreYouSure, setOpenAreYouSure] = useState(false)

  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    console.log("yukarı kaydı")
    scrollViewRef.current.scrollTo({ y: 0, animated: true })
  };

  const [refreshing, setRefreshing] = useState(false);

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 800)
  }

  return (
    <SafeAreaView style={homeStyles.container}>
      <HomeHeader navigation={navigation} pressLogo={handleScrollToTop} uName={uName} />

      <ScrollView style={homeStyles.scroll} ref={scrollViewRef} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
      }
      >
        {/* User Posts */}
        <RenderPost navigation={navigation} HeaderTitle={"HomeScreen"} />
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