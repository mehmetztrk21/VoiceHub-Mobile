import React, { useState } from "react";
import { Dimensions, FlatList, Modal, SafeAreaView, Text } from "react-native";

import AddVoice from "../components/AddVoice";
import Alert from "../components/Alert";
import AreYouSure from "../components/AreYouSure";
import Comment from "../components/Comment";
import OtherHeader from "../components/OtherHeader";

import { View } from "react-native";
import colors from "../../assets/colors";

const { width } = Dimensions.get("window");

export default function OtherComments({ navigation, route }) {
    const { postId, comments } = route.params;

    const [openAreYouSure, setOpenAreYouSure] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

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
                <AreYouSure process={"DeleteComment"} navigation={navigation} setOpenAreYouSure={setOpenAreYouSure} openAreYouSure={openAreYouSure} />
            </Modal>

            <View style={{ marginTop: width * 0.04 }}>
                <FlatList
                    data={comments}
                    keyExtractor={(index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Comment
                            commentId={item._id}
                            navigation={navigation}
                            userPic={item.createdBy?.profilePhotoUrl}
                            createDate={item.createdAt}
                            contentUrl={item.contentUrl}
                            username={item.createdBy?.username}
                            setOpenAreYouSure={setOpenAreYouSure}
                            userId={item.createdBy._id}
                            postId={postId}
                            key={index}
                        />
                    )}
                    ListEmptyComponent={
                        <Text style={{ textAlign: "center", fontWeight: "600", color: colors.green, fontSize: 16 }}>No Comments Yet.</Text>
                    }
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: width * 0.2, marginBottom: width * 0.15 }}
                />
            </View>

            <AddVoice title={"comments"} postId={postId}
                setAlertMessage={setAlertMessage}
                setShowAlert={setShowAlert} />

            <Alert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />

        </SafeAreaView >
    );
}