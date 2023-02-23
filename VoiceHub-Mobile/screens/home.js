import React, { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Modal,
} from "react-native";

//importing components
import BottomTabs from "./components/BottomTabs";
import HomeHeader from "./components/HomeHeader";
import RenderPost from './components/RenderPost';
import AddVoice from './components/AddVoice';

//importing styles
import homeStyles from '../assets/styles/home.style';

export default function HomeScreen({ navigation, route }) {
  const {uName, isYourProfile}=route.params;
  const [visibleUpload, setVisibleUpload]=useState(false)
  const [visiblePopUp, setVisiblePopUp]=useState(false)
  console.log(uName)
  
  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    console.log('yukarı kaydı')
    scrollViewRef.current.scrollTo({y:0})
  };

  return (
    <View style={homeStyles.container}>
      <HomeHeader navigation={navigation} pressLogo={handleScrollToTop} visibleUpload={visibleUpload} setVisibleUpload={setVisibleUpload}/>
      <ScrollView style={[homeStyles.scroll,visibleUpload?(homeStyles.animScroll):null]} ref={scrollViewRef}>
        {/* User Posts */}
        <RenderPost navigation={navigation}/>
      </ScrollView>
      {visibleUpload?(
          <AddVoice bottomSize={50}/>
      ):null}
      <BottomTabs navigation={navigation} userName={uName} 
      visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp}/>
    </View>
  );
}