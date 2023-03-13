import React, { useState } from "react";
import {
    Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View
} from "react-native";

import admin from "../../assets/userImages/admin.jpg";

import colors from "../../assets/colors";
import seeProfileStyles from '../../assets/styles/seeProfile.style';

import { Icon } from "react-native-elements";
import AreYouSure from "../components/areYouSure";
import DontShowPosts from "../components/DontShowPosts";
import Post from "../components/post";
import RenderPost from "../components/RenderPost";

import verfy from "../../assets/ver.png";

const user = JSON.parse(localStorage.getItem("user"));
const userRealName = user.name + " " + user.surname;

export default function seeProfile({ navigation, route }) {
    const { uName, isVerified, visible } = route.params;

    const [openAreYouSure, setOpenAreYouSure] = useState(false)

    return (
        <SafeAreaView style={[seeProfileStyles.container, { background: colors.grad }]}>

            <View style={seeProfileStyles.leftTop}>
                <TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
                    <Icon style={seeProfileStyles.BackButton} type="ionicon" size={28} name={"arrow-back-outline"} />
                </TouchableOpacity>

                <Text style={seeProfileStyles.head}>{uName}</Text>

                {isVerified ? (
                    <Image source={verfy} style={seeProfileStyles.ver} />
                ) : null}
            </View>

            <View style={{ width: "100%", borderBottomStartRadius: 40, borderBottomEndRadius: 40, backgroundColor: colors.white }}>

                {/* PP, Follow Count,  */}
                <View style={seeProfileStyles.actView}>
                    <Image source={admin} style={seeProfileStyles.userPic} />
                    <View style={seeProfileStyles.followContents}>

                        <View style={seeProfileStyles.postCount}>
                            <Text style={seeProfileStyles.fNumber}>47</Text>
                            <Text style={seeProfileStyles.fText}>Post</Text>
                        </View>

                        <TouchableOpacity style={seeProfileStyles.followerCount}
                            onPress={() => { navigation.navigate("FollowFollower", { title: 'Followers' }); }}>
                            <Text style={seeProfileStyles.fNumber}>1M</Text>
                            <Text style={seeProfileStyles.fText}>Followers</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={seeProfileStyles.followCount}
                            onPress={() => { navigation.navigate("FollowFollower", { title: 'Following' }); }}>
                            <Text style={seeProfileStyles.fNumber}>150</Text>
                            <Text style={seeProfileStyles.fText}>Following</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Bio */}
                <View style={seeProfileStyles.bioContents}>
                    <Text style={seeProfileStyles.name}>{userRealName}</Text>
                    <Post />
                </View>

                {/* Edit Profile Buttons */}
                <View style={seeProfileStyles.btnHolder}>
                    <TouchableOpacity style={[seeProfileStyles.editProfileAndFollow, { background: 'linear-gradient(to right, ' + colors.green + ',' + colors.tealGreen + ')' }]}>
                        <Text style={seeProfileStyles.btnTextF}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Posts */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={seeProfileStyles.scroll}
            >
                <View style={[seeProfileStyles.postView, { background: colors.grad }]}>
                    {visible == true ? (
                        <RenderPost navigation={navigation} HeaderTitle={'OtherProfiles'} />
                    ) :
                        <DontShowPosts />
                    }
                </View>
            </ScrollView>

            {openAreYouSure == true ? (
                <AreYouSure process={'LogOut'} navigation={navigation} bottomSize={50} setOpenAreYouSure={setOpenAreYouSure} />
            ) : null}
        </SafeAreaView>
    );
}

