import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image, Modal,
  RefreshControl,
  SafeAreaView, ScrollView, Text, TouchableOpacity,
  View
} from "react-native";

import colors from "../assets/colors";
import profileStyles from "../assets/styles/profile.style";

import AreYouSure from "./components/areYouSure";
import BottomTabs from "./components/BottomTabs";
import EditPostPopUp from "./components/editPostPopUp";
import PopUp from "./components/popUp";
import Post from "./components/post";
import ProfileHeader from "./components/profileHeader";
import RenderPost from "./components/RenderPost";

import { getMyPosts } from "../services/postServices";
import { baseURL } from "../utils/constants";
import { getUserInfo } from "../utils/getUserInfo";
import Loading from "./components/loading";

const { width } = Dimensions.get("window");

export default function ProfileScreen({ navigation, route }) {
  const { username } = route.params;

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

  const getPosts = async (res) => {
    setLoading(true);
    const response = await getMyPosts({ isArchived: false, userId: user?._id });
    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          comments: item.comments,
          username: res?.username,
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: baseURL + res?.profilePhotoUrl,
          likes: item.likes,
          showLike: true,
          isSaved: false,
          isLiked: true,
          
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
    });
  }, [])

  if (loading) return <Loading />

  return (
    <SafeAreaView style={profileStyles.container}>

      <ProfileHeader navigation={navigation} userId={posts?._id} username={user?.username} isVerify={user?.isTic} />

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
        <EditPostPopUp id={openEditPostPopUp} setId={setOpenEditPostPopUp} />
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

          {user?.descriptionVoiceUrl != null ? (
            <Post uri={user?.descriptionVoiceUrl} />
          ) : null}
        </View>

        {/* Edit Profile Buttons */}
        <View style={profileStyles.btnHolder}>
          <TouchableOpacity style={[profileStyles.editProfileAndFollow, { backgroundColor: colors.green }]}
            onPress={() => navigation.navigate("EditProfile", { userInfo: user })}>
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
              setOpenEditPostPopUp={setOpenEditPostPopUp} posts={posts} user={user} />
          ) :
            <View style={{ marginTop: "5%", }}>
              <Text style={
                { textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16 }
              }>
                {"You have not post anyone yet :("}
              </Text>

              <TouchableOpacity onPress={() => { navigation.navigate("Upload", { username: username }) }}>
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

      <BottomTabs navigation={navigation} username={username} setVisiblePopUp={setVisiblePopUp} />
    </SafeAreaView>
  );
}

