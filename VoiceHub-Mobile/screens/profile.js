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

  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [openEditPostPopUp, setOpenEditPostPopUp] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 800)
  }

  const getPosts = async (res = null) => {
    setLoading(true);
    const response = await getMyPosts({ isArchived: false });
    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          userName: res?.username,
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: baseURL + res?.profilePhotoUrl,
          likesCount: 1451,
          caption: "Coffee is the most imp part of my life !",
          type: "sender",
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
    getUserInfo().then(async (res) => {
      setUser(res);
      await getPosts(res);
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
              <Text style={profileStyles.fNumber}>{posts.length}</Text>
              <Text style={profileStyles.fText}>Post</Text>
            </View>

            <TouchableOpacity style={profileStyles.followerCount}
              onPress={() => { navigation.navigate("FollowFollower", { title: "Followers", user: user }); }}>
              <Text style={profileStyles.fNumber}>
                {
                  user["followers"]?.length >= 1000000 ? `${Math.floor(user["followers"]?.length / 1000000)},${Math.floor((user["followers"]?.length) / 100000)}M`
                    : user["followers"]?.length >= 1000 ? `${Math.floor(user["followers"]?.length / 1000)},${Math.floor((user["followers"]?.length) / 100)}K`
                      : user["followers"]?.length
                }
              </Text>
              <Text style={profileStyles.fText}>Followers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={profileStyles.followCount}
              onPress={() => { navigation.navigate("FollowFollower", { title: "Followings", user: user }); }}>
              <Text style={profileStyles.fNumber}>
                {
                  user["followings"]?.length >= 1000000 ? `${Math.floor(user["followings"]?.length / 1000000)}M`
                    : user["followings"]?.length >= 1000 ? `${Math.floor(user["followings"]?.length / 1000)},${Math.floor((user["followings"]?.length % 1000) / 100)}K`
                      : user["followings"]?.length
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
            onPress={() => navigation.navigate("EditProfile", { RealName: (user?.name + " " + user?.surname), uName: uName, pic: (baseURL + user?.profilePhotoUrl) })}>
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
          {posts?.length > 0 ? (
            <RenderPost navigation={navigation} HeaderTitle={"ProfileScreen"}
              setOpenEditPostPopUp={setOpenEditPostPopUp} posts={posts} />
          ) :
            <View style={{ marginTop: "5%", }}>
              <Text style={
                { textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16 }
              }>
                {"You have not post anyone yet :("}
              </Text>

              <TouchableOpacity onPress={() => { navigation.navigate("Upload", { uName: uName }) }}>
                <Text style={
                  { width: "60%", marginLeft: "20%", textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16, backgroundColor: colors.white, borderRadius: 15, paddingVertical: 10, }}>
                  Upload Now!
                </Text>
              </TouchableOpacity>
            </View>
          }
        </View>
      </ScrollView>

      {visiblePopUp == true ? (
        <PopUp navigation={navigation} bottomSize={50} setOpenAreYouSure={setOpenAreYouSure} setVisiblePopUp={setVisiblePopUp} />
      ) : null}

      <BottomTabs navigation={navigation} userName={uName} visiblePopUp={visiblePopUp} setVisiblePopUp={setVisiblePopUp} pageName={"ProfileScreen"} />
    </SafeAreaView>
  );
}

