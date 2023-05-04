import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Modal, SafeAreaView, ScrollView, Text } from "react-native";

import AddVoice from "../components/addVoice";
import AreYouSure from "../components/areYouSure";
import Comment from "../components/comment";
import OtherHeader from "../components/otherHeader";

import { View } from "react-native";
import colors from "../../assets/colors";

const { width } = Dimensions.get("window");

export default function OtherComments({ navigation, route }) {
    const { postId, comments } = route.params;
    const scrollViewRef = useRef(null);

    const [openAreYouSure, setOpenAreYouSure] = useState(false);

    const handleLayout = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "column", backgroundColor: colors.white }}>
            <OtherHeader HeaderTitle={"Comments"} navigation={navigation} isTic={false} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={openAreYouSure ? true : false}
                onRequestClose={() => {
                    setOpenAreYouSure(false);
                }}
            >
                <AreYouSure process={"DeleteComment"} setOpenAreYouSure={setOpenAreYouSure} openAreYouSure={openAreYouSure} />
            </Modal>

            <View style={{ marginTop: width * 0.04 }}>

                <ScrollView ref={scrollViewRef} onLayout={handleLayout}
                    showsVerticalScrollIndicator={false} style={{ marginTop: width * 0.2, marginBottom: width * 0.15 }}>
                    {comments?.length > 0 ? (
                        comments?.map((item, index) => {
                            return (
                                <Comment key={index} commentId={item._id} navigation={navigation} userPic={item.createdBy?.profilePhotoUrl}
                                    createDate={item.createdAt} contentUrl={item.contentUrl} username={item.createdBy?.username}
                                    setOpenAreYouSure={setOpenAreYouSure} userId={item.createdBy._id} />
                            )
                        })
                    ) :
                        <Text style={{ textAlign: "center", fontWeight: "600", color: colors.green, fontSize: 16, }}>No Comments Yet.</Text>
                    }
                </ScrollView>


            </View>
            <AddVoice title={"comments"} postId={postId} />

        </SafeAreaView >
    );
}