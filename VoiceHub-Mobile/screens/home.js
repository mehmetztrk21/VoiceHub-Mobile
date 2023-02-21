import React, { useRef } from "react";
import {
  ScrollView,
  View,
} from "react-native";

//importing components
import BottomTabs from "./components/BottomTabs";
import HomeHeader from "./components/HomeHeader";
import RenderPost from './components/RenderPost';


//importing styles
import homeStyles from '../assets/styles/home.style';

export default function HomeScreen({ navigation, route }) {
  const {userName}=route.params;
  console.log(userName)
  
  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    console.log('yukarı kaydı')
    scrollViewRef.current.scrollTo({y:0})
  };

  return (
    <View style={homeStyles.container}>
      <HomeHeader navigation={navigation} pressLogo={handleScrollToTop}/>
      <ScrollView style={homeStyles.scroll} ref={scrollViewRef}>
        {/* User Posts */}
        <RenderPost navigation={navigation}/>
      </ScrollView>
      <BottomTabs navigation={navigation} userName={userName}/>
    </View>
  );
}