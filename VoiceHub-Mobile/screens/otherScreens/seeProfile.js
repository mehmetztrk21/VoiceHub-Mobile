import React, { useRef, useState } from "react";
import {
    Image, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View
} from "react-native";

import colors from "../../assets/colors";
import seeProfileStyles from '../../assets/styles/seeProfile.style';
import admin from "../../assets/userImages/admin.jpg";
import verfy from "../../assets/ver.png";

import { Icon } from "react-native-elements";
import AreYouSure from "../components/areYouSure";
import DontShowPosts from "../components/DontShowPosts";
import Post from "../components/post";
import RenderPost from "../components/RenderPost";
import { FollowFollowerButtonText } from "../components/followFollowerButtonText";



const user = {
    name: "Mehmet",
    surname: "Öztürk",
    username: "mehmet.ztrk"
} //TODO: get in localStorage
const userRealName = user.name + " " + user.surname;

export default function SeeProfile({ navigation, route }) {
    const { uName, isVerified, visible, isYouFollowing, isYourFollower, hasBio } = route.params;
    const scrollViewRef = useRef(null);

    const handleLayout = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    const [refreshing, setRefreshing] = useState(false);

    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false)
        }, 800)
    }

    const [openAreYouSure, setOpenAreYouSure] = useState(false)

    return (
        <SafeAreaView style={[seeProfileStyles.container, { backgroundColor: colors.green }]}>

            <View style={seeProfileStyles.leftTop}>
                <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
                    <Icon style={seeProfileStyles.BackButton} type="ionicon" size={28} name={"arrow-back-outline"} />
                </TouchableOpacity>

                <Text style={seeProfileStyles.head}>{uName}</Text>

                {isVerified ? (
                    <Image source={verfy} style={seeProfileStyles.ver} />
                ) : null}
            </View>

            <View style={{ width: "100%", borderBottomStartRadius: 26, borderBottomEndRadius: 26, backgroundColor: colors.white }}>

                {/* PP, Follow Count,  */}
                <View style={seeProfileStyles.actView}>
                    <Image source={admin} style={seeProfileStyles.userPic} />
                    <View style={seeProfileStyles.followContents}>

                        <View style={seeProfileStyles.postCount}>
                            <Text style={seeProfileStyles.fNumber}>47</Text>
                            <Text style={seeProfileStyles.fText}>Post</Text>
                        </View>

                        <TouchableOpacity style={seeProfileStyles.followerCount}
                            onPress={() => { visible ? (navigation.navigate("FollowFollower", { title: 'Followers' })) : null }}>
                            <Text style={seeProfileStyles.fNumber}>1M</Text>
                            <Text style={seeProfileStyles.fText}>Followers</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={seeProfileStyles.followCount}
                            onPress={() => { visible ? (navigation.navigate("FollowFollower", { title: 'Following' })) : null }}>
                            <Text style={seeProfileStyles.fNumber}>150</Text>
                            <Text style={seeProfileStyles.fText}>Following</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Bio */}
                <View style={seeProfileStyles.bioContents}>
                    <Text style={seeProfileStyles.name}>{userRealName}</Text>
                    {hasBio ? (<Post />) : null}
                </View>

                {/* Edit Profile Buttons */}
                <View style={seeProfileStyles.btnHolder}>
                    <TouchableOpacity style={{
                        width: "80%",
                        alignItems: "center",
                        padding: "2%",
                        backgroundColor: colors.green,
                        borderRadius: 12.5,
                    }}>
                        <Text style={{ color: colors.white, fontSize: 16, fontWeight: "600", }}>
                            {(FollowFollowerButtonText(isYouFollowing))}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Posts */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={seeProfileStyles.scroll}
                ref={scrollViewRef}
                onLayout={handleLayout}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
                }
            >
                <View style={[seeProfileStyles.postView, { backgroundColor: colors.green }]}>
                    {visible == true ? (
                        <RenderPost navigation={navigation} HeaderTitle={'OtherProfiles'} />
                    ) :
                        <DontShowPosts />
                    }
                </View>
            </ScrollView>

            {openAreYouSure == true ? (
                <AreYouSure process={'LogOut'} navigation={navigation}
                    setOpenAreYouSure={setOpenAreYouSure} />
            ) : null}
        </SafeAreaView>
    );
}

