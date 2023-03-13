import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";

//importing components
import BottomTabs from "./components/BottomTabs";
import HomeHeader from "./components/HomeHeader";
import RenderPost from './components/RenderPost';

//importing styles
import homeStyles from '../assets/styles/home.style';
import { PostsList } from "../services/postServices";

export default function HomeScreen({ navigation, route }) {
  const { uName } = route.params;
  const [posts, setPosts] =useState([]);
  const [visiblePopUp, setVisiblePopUp] = useState(false)

  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    console.log('yukarı kaydı')
    scrollViewRef.current.scrollTo({ y: 0 })
  };
  const getPosts = async() =>{
    const response = await PostsList();
    if(response.status){
      setPosts(response.list)  
    }
    else {
      alert("Get posts error")
    }
  }
  useEffect(()=>{
    getPosts();
  },[])

  return (
    <SafeAreaView style={homeStyles.container}>
      <HomeHeader navigation={navigation} pressLogo={handleScrollToTop} uName={uName} />

      <ScrollView style={homeStyles.scroll} ref={scrollViewRef}>
        {/* User Posts */}
        <RenderPost navigation={navigation} pageName={'HomeScreen'} posts={posts}/>
      </ScrollView>

      <BottomTabs navigation={navigation} userName={uName}
        visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp}
        pageName={"HomeScreen"}/>
    </SafeAreaView>
  );
}