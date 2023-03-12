import React from 'react';
import { View, SafeAreaView } from 'react-native';
import OtherHeader from '../components/otherHeader';

import RenderPost from "../components/RenderPost";
import savedStyle from "../../assets/styles/saved.style";

export default function SavedArchieves({ navigation, route }) {
  const {HeaderTitle}=route.params;

  return (
    <SafeAreaView style={savedStyle.container}>

      <OtherHeader HeaderTitle={HeaderTitle} navigation={navigation}/>

      <View style={savedStyle.savedPostContainer}>
        <RenderPost navigation={navigation} HeaderTitle={HeaderTitle}/>
      </View>
    </SafeAreaView>
  );
}