import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import OtherHeader from '../components/otherHeader';

import RenderPost from "../components/RenderPost";
import ArchivePopUp from "../components/archivePopUp";
import savedStyle from "../../assets/styles/saved.style";

export default function SavedArchieves({ navigation, route }) {
  const {HeaderTitle}=route.params;
  
  const [openArchivePopUp, setOpenArchivePopUp] = useState(false)  

  return (
    <SafeAreaView style={savedStyle.container}>

      <OtherHeader HeaderTitle={HeaderTitle} navigation={navigation}/>

      <View style={savedStyle.savedPostContainer}>
        <RenderPost navigation={navigation} HeaderTitle={HeaderTitle} setOpenArchivePopUp={setOpenArchivePopUp}/>
      </View>

      {
        openArchivePopUp==true?(
          <ArchivePopUp/>
        ):null
      }
    </SafeAreaView>
  );
}