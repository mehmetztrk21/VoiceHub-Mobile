import React, { useEffect, useState, useRef } from "react";
import {
  Dimensions, Image, Modal,
  RefreshControl, SafeAreaView, ScrollView, Text,
  TouchableOpacity, View,
} from "react-native";

import colors from "../assets/colors";
import profileStyles from "../assets/styles/profile.style";

import AreYouSure from "./components/areYouSure";
import BottomTabs from "./components/BottomTabs";
import EditPostPopUp from "./components/editPostPopUp";
import EditCategoriesPopUp from "./components/editCategoriesPopUp";
import PopUp from "./components/ProfileBottomPopUp";
import Post from "./components/post";
import ProfileHeader from "./components/profileHeader";
import RenderPost from "./components/RenderPost";

import { getMyPosts } from "../services/postServices";
import { baseURL } from "../utils/constants";
import Loading from "./components/loading";
import { followerCountFormatText } from "../utils/followerCountFormatText";
import { useUser } from "../utils/userContext";

const { width } = Dimensions.get("window");

export default function ProfileScreen({ navigation }) {

  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [openEditPostPopUp, setOpenEditPostPopUp] = useState(false);
  const [openEditCategoriesPopUp, setOpenEditCategoriesPopUp] = useState();

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user } = useUser();
  const [posts, setPosts] = useState([]);

  const pullThePage = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 800)
  }
  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true })
  };

  const getPosts = async () => {
    setLoading(true);
    const response = await getMyPosts({ isArchived: false, userId: user?._id });
    if (response && response.success) {
      let temp = response.data.map((item) => {
        return {
          id: item._id,
          contentUrl: item.contentUrl,
          categories: item.categories,
          comments: item.comments,
          username: user?.username,
          createdBy: item.createdBy,
          createdAt: item.createdAt,
          userPic: baseURL + user?.profilePhotoUrl,
          likes: item.likes,
          isLikesVisible: item.isLikesVisible,
        }
      })
      setPosts(temp);
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <SafeAreaView style={profileStyles.container}>

      <ProfileHeader navigation={navigation} pressLogo={handleScrollToTop} />

      <Modal
        visible={visiblePopUp}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setVisiblePopUp(false)
        }}>
        <PopUp navigation={navigation} setOpenAreYouSure={setOpenAreYouSure}
          setVisiblePopUp={setVisiblePopUp} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openAreYouSure}
        onRequestClose={() => {
          setOpenAreYouSure(false);
        }}
      >
        <AreYouSure process={"LogOut"} navigation={navigation}
          setOpenAreYouSure={setOpenAreYouSure} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openEditPostPopUp ? true : false}
        onRequestClose={() => { setOpenEditPostPopUp(false) }}
      >
        <EditPostPopUp id={openEditPostPopUp} setId={setOpenEditPostPopUp} setOpenEditCategoriesPopUp={setOpenEditCategoriesPopUp} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openEditCategoriesPopUp ? true : false}
        onRequestClose={() => { setOpenEditCategoriesPopUp(false) }}
      >
        <EditCategoriesPopUp id={openEditPostPopUp} setId={setOpenEditPostPopUp} categories={openEditCategoriesPopUp} setCategories={setOpenEditCategoriesPopUp} />
      </Modal>

      <View style={{ width: width, borderBottomStartRadius: 26, borderBottomEndRadius: 26, backgroundColor: colors.white, marginTop: 80 }}>

        {/* PP, Follow Count,  */}
        <View style={profileStyles.actView}>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            {user?.profilePhotoUrl ?
              < Image source={{ uri: baseURL + user?.profilePhotoUrl }} style={profileStyles.userPic} /> :
              <Image source={require('../assets/avatar.png')} style={profileStyles.userPic} />
            }
          </TouchableOpacity>

          <View style={profileStyles.followContents}>

            <View style={profileStyles.postCount}>
              <Text style={profileStyles.fNumber}>{posts.length}</Text>
              <Text style={profileStyles.fText}>Post</Text>
            </View>

            <TouchableOpacity style={profileStyles.followerCount}
              onPress={() => { navigation.navigate("FollowFollower", { title: "Followers", thisUser: user }); }}>
              <Text style={profileStyles.fNumber}>
                {followerCountFormatText(user?.followers?.length)}
              </Text>
              <Text style={profileStyles.fText}>Followers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={profileStyles.followCount}
              onPress={() => { navigation.navigate("FollowFollower", { title: "Followings", thisUser: user }); }}>
              <Text style={profileStyles.fNumber}>
                {followerCountFormatText(user?.followings?.length)}
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
        ref={scrollViewRef}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
        }
        style={profileStyles.scroll}
      >
        <View style={[profileStyles.postView, { backgroundColor: colors.green }]}>
          {posts?.length > 0 ? (
            <RenderPost navigation={navigation} HeaderTitle={"ProfileScreen"} setOpenEditPostPopUp={setOpenEditPostPopUp}
              setOpenEditCategoriesPopUp={setOpenEditCategoriesPopUp} posts={posts} user={user} />
          ) :
            <View style={{ marginTop: "5%", }}>
              <Text style={
                { textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16 }
              }>
                {"You have not post anyone yet :("}
              </Text>

              <TouchableOpacity onPress={() => { navigation.navigate("Upload") }}>
                <Text style={
                  { width: "60%", marginLeft: "20%", textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16, backgroundColor: colors.white, borderRadius: 15, paddingVertical: 10, }}>
                  Upload Now!
                </Text>
              </TouchableOpacity>
            </View>
          }
        </View>
      </ScrollView>

      <BottomTabs navigation={navigation} setVisiblePopUp={setVisiblePopUp} />
    </SafeAreaView>
  );
}

