import React, { useRef, useState } from "react";
import { Dimensions, Modal, SafeAreaView, ScrollView } from "react-native";

import AddVoice from "../components/addVoice";
import Comment from "../components/comment";
import OtherHeader from "../components/otherHeader";
import userPostData from "../components/userPostData";
import AreYouSure from "../components/areYouSure";

import { View } from "react-native";
const { width } = Dimensions.get("window");

export default function OtherComments({ navigation }) {
    const scrollViewRef = useRef(null);

    const [openAreYouSurePopUp, setOpenAreYouSurePopUp] = useState(false);

    const handleLayout = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
            <OtherHeader HeaderTitle={'Comments'} navigation={navigation} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={openAreYouSurePopUp}
                onRequestClose={() => {
                    setOpenAreYouSurePopUp(false);
                }}
            >
                <AreYouSure process={"DeleteComment"} setOpenAreYouSurePopUp={setOpenAreYouSurePopUp} />
            </Modal>

            <View style={{ marginTop: width * 0.04 }}>

                <ScrollView ref={scrollViewRef} onLayout={handleLayout}
                    showsVerticalScrollIndicator={false} style={{ marginTop: width * 0.2, marginBottom: width * 0.15 }}>
                    {
                        userPostData.map((item, index) => {
                            return (
                                <Comment key={index} navigation={navigation} userPic={item.userPic}
                                    userName={item.userName} isVerify={item.isVerify}
                                    setOpenAreYouSurePopUp={setOpenAreYouSurePopUp} />
                            )
                        })
                    }
                </ScrollView>


            </View>
            <AddVoice title={"comments"} />

        </SafeAreaView>
    );
}