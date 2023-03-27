import React, { useEffect, useRef } from "react";
import { Dimensions, SafeAreaView, ScrollView } from "react-native";

import AddVoice from "../components/addVoice";
import Comment from "../components/comment";
import OtherHeader from "../components/otherHeader";
import userPostData from "../components/userPostData";

import { View } from "react-native";
const { width } = Dimensions.get("window");

export default function OtherComments({ navigation }) {
    const scrollViewRef = useRef(null);

    const handleLayout = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
      };

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
            <OtherHeader HeaderTitle={'Comments'} navigation={navigation} />
            
            <View style={{ marginTop: width * 0.04 }}>

                <ScrollView ref={scrollViewRef} onLayout={handleLayout}
                    showsVerticalScrollIndicator={false} style={{ marginTop: width * 0.2, marginBottom: width * 0.15 }}>
                    {
                        userPostData.map((item, index) => {
                            return (
                                <Comment key={index} navigation={navigation} userPic={item.userPic} userName={item.userName} isVerify={item.isVerify}/>
                            )
                        })
                    }
                </ScrollView>

                <AddVoice title={"comments"}/>
            </View>

        </SafeAreaView>
    );
}