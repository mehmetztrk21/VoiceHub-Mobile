import React, { useRef, useState } from "react";
import { Image, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Dimensions, Modal } from "react-native";

import colors from "../../assets/colors";
import seePostStyle from "../../assets/styles/seePost.style";
import user1 from "../../assets/userImages/user1.jpg";
import ver from "../../assets/ver.png";

import AddVoice from "../components/addVoice";
import Comment from "../components/comment";
import OtherHeader from "../components/otherHeader";
import Post from "../components/post";
import PostActions from "../components/postActions";
import PostCategories from "../components/postCategories";
import AreYouSure from "../components/areYouSure";
import userPostData from "../components/userPostData";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const user = {
    name: "Mehmet",
    surname: "Öztürk",
    username: "mehmet.ztrk"
} //TODO: get in localStorage
const username = user.username;

/* HALF SCREEN, CONTINUE THIS PAGE */
export default function SeePost({ navigation, route }) {

    const scrollViewRef = useRef();
    const { uName, isVerify } = route.params;

    const handleLayout = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    const [refreshing, setRefreshing] = useState(false);
    const [openAreYouSurePopUp, setOpenAreYouSurePopUp] = useState(false);

    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false)
        }, 800)
    }

    return (
        <SafeAreaView style={seePostStyle.container}>

            <OtherHeader HeaderTitle={""} navigation={navigation} />
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
            <View style={{
                flexDirection: "column", backgroundColor: colors.white,
                paddingBottom: 20, marginTop: width * 0.04,
                borderBottomRightRadius: 38, borderBottomLeftRadius: 38,
            }}>
                <Image source={user1} style={{ height: height * 0.2, width: height * 0.2, borderRadius: height * 0.1, marginTop: height * 0.1, marginBottom: height * 0.01, alignSelf: "center" }} />
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "500", color: colors.black }}>
                        {uName}
                    </Text>

                    {isVerify ? (
                        <Image source={ver} style={{ width: 24, height: 24, paddingLeft: 6, alignSelf: "center" }} />
                    ) : null}
                </View>

                {/* SOUND PLAYER */}
                <View style={{ paddingLeft: "20%", paddingRight: "2.5%" }}>
                    <Post />
                </View>

                {/* CATEGORIES */}
                <View style={{ alignItems: "center", flexDirection: "column" }}>
                    <PostCategories navigation={navigation} username={username} />
                </View>

                <View style={{ width: "50%", marginLeft: "25%" }}>
                    <PostActions navigation={navigation} isLiked={false}
                        isSaved={false} showLike={true} likesCount={1555}
                        commentCount={125} id={"efawfe"} />
                </View>



            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={seePostStyle.comments} ref={scrollViewRef}
                onLayout={handleLayout} refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
                } >
                {
                    userPostData.map((item, index) => {
                        return (
                            <View key={index} style={{ backgroundColor: colors.white, borderRadius: 20, marginTop: 15, padding: "1%" }}>
                                <Comment navigation={navigation} userPic={item.userPic}
                                    userName={item.userName} setOpenAreYouSurePopUp={setOpenAreYouSurePopUp} />
                            </View>
                        )
                    })
                }
            </ScrollView>

            <AddVoice title={"comments"} />
        </SafeAreaView>
    );
}