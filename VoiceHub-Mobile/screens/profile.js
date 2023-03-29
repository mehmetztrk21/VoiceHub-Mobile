import React, { useEffect, useState } from "react";
import {
  Image, Modal, ActivityIndicator, RefreshControl,
  SafeAreaView, ScrollView, Text, TouchableOpacity,
  View, Dimensions
} from "react-native";

import admin from "../assets/userImages/admin.jpg";

import colors from "../assets/colors";
import profileStyles from "../assets/styles/profile.style";

import { getMyPosts } from "../services/postServices";

import AreYouSure from "./components/areYouSure";
import BottomTabs from "./components/BottomTabs";
import EditPostPopUp from "./components/editPostPopUp";
import PopUp from "./components/popUp";
import Post from "./components/post";
import ProfileHeader from "./components/profileHeader";
import RenderPost from "./components/RenderPost";
import { baseURL } from "../utils/constants";
import { getUserInfo } from "../utils/getUserInfo";

const { width } = Dimensions.get("window");

export default function ProfileScreen({ navigation, route }) {
  const { uName } = route.params;
  const [user, setUser] = useState({});
  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [openEditPostPopUp, setOpenEditPostPopUp] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState([]);

  const [followerCount, setFollowerCount] = useState(7285687);
  const [followCount, setFollowCount] = useState(7525);

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 800)
  }

  const getPosts = async () => {
    setLoading(true);
    const response = await getMyPosts();
    // console.log(response)
    if (response && response.success) {
      let temp = response.data.map((item) => {
        //   console.log(item.categories, "item.categories");
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          userName: "Mehmet",
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: "user1",
          likesCount: 1451,
          caption: "Coffee is the most imp part of my life !",
          type: "sender",
          visible: true,
          category: "all",
          showLike: false,
          isSaved: item.isSaved,
          isLiked: true,
          date: "12/02/2023 12:41",
          isYourFollower: true,
          isYouFollowing: true,
          commentCount: 12,
          hasBio: false,
          isVerify: false,
        }
      })

      setPosts(temp);
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getUserInfo().then((res) => {
      setUser(res);
      getPosts();
    })
  }, [])

  if (loading) {
    return (
      <View style={{
        flex: 1, backgroundColor: "rgba(255, 255, 255, 0)",
        justifyContent: "center", alignItems: "center"
      }}>
        <ActivityIndicator size="large" color={colors.green} />
      </View>)
  }


  return (
    <SafeAreaView style={profileStyles.container}>

      <ProfileHeader navigation={navigation} uName={uName} isVerified={true} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={openAreYouSure}
        onRequestClose={() => {
          setOpenAreYouSure(!openAreYouSure);
        }}
      >
        <AreYouSure process={"LogOut"} navigation={navigation}
          setOpenAreYouSure={setOpenAreYouSure} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openEditPostPopUp ? true : false}
        onRequestClose={() => {
          setOpenEditPostPopUp(false);
        }}
      >
        <EditPostPopUp bottomSize={50} id={openEditPostPopUp} setId={setOpenEditPostPopUp} />
      </Modal>

      <View style={{ width: width, borderBottomStartRadius: 26, borderBottomEndRadius: 26, backgroundColor: colors.white, marginTop: 80 }}>

        {/* PP, Follow Count,  */}
        <View style={profileStyles.actView}>
          <Image source={{ uri: baseURL + user?.profilePhotoUrl }} style={profileStyles.userPic} />
          <View style={profileStyles.followContents}>

            <View style={profileStyles.postCount}>
              <Text style={profileStyles.fNumber}>47</Text>
              <Text style={profileStyles.fText}>Post</Text>
            </View>

            <TouchableOpacity style={profileStyles.followerCount}
              onPress={() => { navigation.navigate("FollowFollower", { title: "Followers" }); }}>
              <Text style={profileStyles.fNumber}>
                {
                  followerCount >= 1000000 ? `${Math.floor(followerCount / 1000000)},${Math.floor((followerCount % 1000000) / 100000)}M`
                    : followerCount >= 1000 ? `${Math.floor(followerCount / 1000)},${Math.floor((followerCount % 1000) / 100)}K`
                      : followerCount
                }
              </Text>
              <Text style={profileStyles.fText}>Followers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={profileStyles.followCount}
              onPress={() => { navigation.navigate("FollowFollower", { title: "Following" }); }}>
              <Text style={profileStyles.fNumber}>
                {
                  followCount >= 1000000 ? `${Math.floor(followCount / 1000000)}M`
                    : followCount >= 1000 ? `${Math.floor(followCount / 1000)},${Math.floor((followCount % 1000) / 100)}K`
                      : followCount
                }
              </Text>
              <Text style={profileStyles.fText}>Following</Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* Bio */}
        <View style={profileStyles.bioContents}>
          <Text style={profileStyles.name}>{user?.name + " " + user?.surname}</Text>
          <Post />
        </View>

        {/* Edit Profile Buttons */}
        <View style={profileStyles.btnHolder}>
          <TouchableOpacity style={[profileStyles.editProfileAndFollow, { backgroundColor: colors.green }]}
            onPress={() => navigation.navigate("EditProfile", { RealName: (user?.name + " " + user?.surname), uName: uName, pic: admin })}>
            <Text style={profileStyles.btnTextF}>Edit Profile</Text>
          </TouchableOpacity>

        </View>
      </View>

      {/* Posts */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
        }
        style={[profileStyles.scroll,
        visiblePopUp == true ? (profileStyles.popUpMargin) : null]}
      >
        <View style={[profileStyles.postView, { backgroundColor: colors.green }]}>
          <RenderPost navigation={navigation} HeaderTitle={"ProfileScreen"}
            setOpenEditPostPopUp={setOpenEditPostPopUp} posts={posts} />
        </View>
      </ScrollView>

      {visiblePopUp == true ? (
        <PopUp navigation={navigation} bottomSize={50} setOpenAreYouSure={setOpenAreYouSure} setVisiblePopUp={setVisiblePopUp} />
      ) : null}

      <BottomTabs navigation={navigation} userName={uName} setVisiblePopUp={setVisiblePopUp} pageName={"ProfileScreen"} />
    </SafeAreaView>
  );
}

