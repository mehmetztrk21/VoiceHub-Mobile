import React from 'react';
import { View, SafeAreaView } from 'react-native';
import OtherHeader from '../components/otherHeader';

import RenderPost from "../components/RenderPost";
import savedStyle from "../../assets/styles/saved.style";

export default function Saved({ navigation }) {

  return (
    <SafeAreaView style={savedStyle.container}>

      <OtherHeader HeaderTitle='Saved Posts' navigation={navigation}/>

      <View style={savedStyle.savedPostContainer}>
        <RenderPost navigation={navigation} isSaved={true}/>
      </View>
    </SafeAreaView>
  );
}