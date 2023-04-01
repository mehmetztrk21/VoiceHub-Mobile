import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Dimensions, Modal, SafeAreaView, ScrollView, Text } from "react-native";

import AddVoice from "../components/addVoice";
import Comment from "../components/comment";
import OtherHeader from "../components/otherHeader";
import AreYouSure from "../components/areYouSure";

import { View } from "react-native";
import colors from "../../assets/colors";
import { getUserInfo } from "../../utils/getUserInfo";

const { width } = Dimensions.get("window");

export default function OtherComments({ navigation, comments }) {
    const scrollViewRef = useRef(null);

    const [openAreYouSurePopUp, setOpenAreYouSurePopUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const handleLayout = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    if (loading) {
        return (
            <View style={{
                flex: 1, backgroundColor: "rgba(255, 255, 255, 0)",
                justifyContent: "center", alignItems: "center",
            }}>
                <ActivityIndicator size="large" color={colors.green} />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
            <OtherHeader HeaderTitle={"Comments"} navigation={navigation} />

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
                    {comments?.length > 0 ? (
                        comments?.map((item, index) => {
                            return (
                                <Comment key={index} navigation={navigation} userPic={"user1"}
                                    userName={"k"} setOpenAreYouSurePopUp={setOpenAreYouSurePopUp} id={item.id} />
                            )
                        })
                    ) :
                        <Text style={{ textAlign: "center", fontWeight: "600", color: colors.green, fontSize: 16, }}>Henüz Bir Yorum Yok</Text>
                    }
                </ScrollView>


            </View>
            <AddVoice title={"comments"} />

        </SafeAreaView >
    );
}