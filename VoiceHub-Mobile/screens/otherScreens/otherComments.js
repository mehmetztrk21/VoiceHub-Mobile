import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Modal, SafeAreaView, ScrollView, Text } from "react-native";

import AddVoice from "../components/addVoice";
import AreYouSure from "../components/areYouSure";
import Comment from "../components/comment";
import OtherHeader from "../components/otherHeader";

import { View } from "react-native";
import colors from "../../assets/colors";
import Loading from "../components/loading";
import { baseURL } from "../../utils/constants";

const { width } = Dimensions.get("window");

export default function OtherComments({ navigation, route }) {
    const { postId, comments } = route.params;
    const scrollViewRef = useRef(null);

    const [openAreYouSurePopUp, setOpenAreYouSurePopUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const handleLayout = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    if (loading) return <Loading />

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "column", backgroundColor: colors.white }}>
            <OtherHeader HeaderTitle={"Comments"} navigation={navigation} isVerify={false}/>

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
                                <Comment key={index} navigation={navigation} userPic={baseURL + item.createdBy?.profilePhotoUrl} createDate={item.createdAt}
                                    contentUrl={item.contentUrl} username={item.createdBy?.username} setOpenAreYouSurePopUp={setOpenAreYouSurePopUp} userId={item.createdBy._id} />
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