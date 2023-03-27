import React, { useRef, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';

import ArchivePopUp from "../components/archivePopUp";
import OtherHeader from '../components/otherHeader';
import RenderPost from "../components/RenderPost";

import savedStyle from "../../assets/styles/saved.style";

import { Dimensions } from "react-native";
import colors from '../../assets/colors';
const { width } = Dimensions.get("window");

export default function SavedArchieves({ navigation, route }) {

  const scrollViewRef = useRef();

  const handleLayout = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const [refreshing, setRefreshing] = useState(false);

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 800)
  }

  const { HeaderTitle } = route.params;

  const [openArchivePopUp, setOpenArchivePopUp] = useState(false)

  return (
    <SafeAreaView style={savedStyle.container}>

      <OtherHeader HeaderTitle={HeaderTitle} navigation={navigation} />
      <View style={{ marginTop: width * 0.04 }}>

        <ScrollView style={savedStyle.savedPostContainer} ref={scrollViewRef} onLayout={handleLayout}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]}/>
          } >
          <RenderPost navigation={navigation} HeaderTitle={HeaderTitle} setOpenArchivePopUp={setOpenArchivePopUp} />
        </ScrollView>

        {
          openArchivePopUp == true ? (
            <ArchivePopUp />
          ) : null
        }

      </View>
    </SafeAreaView>
  );
}