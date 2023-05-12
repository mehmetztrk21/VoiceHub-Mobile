import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image, Modal,
  RefreshControl, SafeAreaView,
  Share,
  Text,
  TouchableOpacity, View
} from "react-native";

import { useIsFocused } from "@react-navigation/native";

import colors from "../assets/colors";
import profileStyles from "../assets/styles/profile.style";

import PopUp from "./components/ProfileBottomPopUp";
import RenderPost from "./components/RenderPost";
import AreYouSure from "./components/areYouSure";
import ProfilePhotoPopUp from "./components/profilePhotoPopUp";
import EditCategoriesPopUp from "./components/editCategoriesPopUp";
import EditPostPopUp from "./components/editPostPopUp";
import Loading from "./components/loading";
import Post from "./components/post";
import ProfileHeader from "./components/profileHeader";

import { getMyPosts } from "../services/postServices";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { baseURL } from "../utils/constants";
import { followerCountFormatText } from "../utils/followerCountFormatText";
import { useUser } from "../utils/userContext";

const { width } = Dimensions.get("window");

export default function ProfileScreen({ navigation }) {

  const isFocused = useIsFocused();

  const [openAreYouSure, setOpenAreYouSure] = useState(false)
  const [openEditPostPopUp, setOpenEditPostPopUp] = useState(false);
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const [openEditCategoriesPopUp, setOpenEditCategoriesPopUp] = useState();
  const [openProfilePhotoPopUp, setOpenProfilePhotoPopUp] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

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
    scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const getPosts = async () => {
    setLoading(true);
    const response = await getMyPosts({ isArchived: false, userId: user?._id });
    if (response && response.success) {
      setPosts(response?.data);
    }
    else {
      if (response?.message == "Unauthorized") {
        await AsyncStorage.clear();
        navigation.navigate("Login");
      }
    }
    setLoading(false);
  }

  const shareMyProfile = async () => {
    try {
      Share.share({
        message: "https://github.com/mehmetztrk21/VoiceHub-Mobile/",
      });
    } catch (error) {
      console.error('Share error:', error);
    }
  }


  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [])

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [isFocused])

  if (loading) {
    return <Loading />
  }

  return (
    <SafeAreaView style={profileStyles.container}>

      <ProfileHeader navigation={navigation} pressLogo={handleScrollToTop} setVisiblePopUp={setVisiblePopUp} />

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
        }}>
        <AreYouSure process={"LogOut"} navigation={navigation}
          setOpenAreYouSure={setOpenAreYouSure} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openEditPostPopUp ? true : false}
        onRequestClose={() => { setOpenEditPostPopUp(false) }}
      >
        <EditPostPopUp navigation={navigation} id={openEditPostPopUp} setId={setOpenEditPostPopUp} setOpenEditCategoriesPopUp={setOpenEditCategoriesPopUp} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openEditCategoriesPopUp ? true : false}
        onRequestClose={() => { setOpenEditCategoriesPopUp(false) }}
      >
        <EditCategoriesPopUp setId={setOpenEditPostPopUp} categories={openEditCategoriesPopUp} setCategories={setOpenEditCategoriesPopUp} />
      </Modal>

      <Modal visible={openProfilePhotoPopUp}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setOpenProfilePhotoPopUp(false)
        }}>
        <ProfilePhotoPopUp navigation={navigation} setOpenProfilePhotoPopUp={setOpenProfilePhotoPopUp} setImage={setImage} title={"ProfileScreen"} />
      </Modal>

      <View style={{ width: width, borderBottomStartRadius: 26, borderBottomEndRadius: 26, backgroundColor: colors.white, marginTop: 80 }}>

        {/* PP, Follow Count,  */}
        <View style={profileStyles.actView}>
          <TouchableOpacity onPress={() => setOpenProfilePhotoPopUp(true)}>
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
          <TouchableOpacity style={profileStyles.editProfileAndFollow}
            onPress={shareMyProfile}>
            <Text style={profileStyles.btnTextF}>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity style={profileStyles.editProfileAndFollow}
            onPress={() => navigation.navigate("EditProfile")}>
            <Text style={profileStyles.btnTextF}>Edit Profile</Text>
          </TouchableOpacity>

        </View>
      </View>

      {/* Posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item._id}
        refreshing={refreshing}
        onRefresh={pullThePage}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => pullThePage()}
            colors={[colors.green]}
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={profileStyles.scroll}
        ListEmptyComponent={() => (
          <View style={{ marginTop: "5%" }}>
            <Text style={{ textAlign: "center", marginBottom: 20, color: colors.white, fontWeight: "700", fontSize: 16 }}>
              {"You have not posted anything yet :("}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Upload")}>
              <Text style={{ width: "60%", marginLeft: "20%", textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16, backgroundColor: colors.white, borderRadius: 15, paddingVertical: 10 }}>
                Upload Now!
              </Text>
            </TouchableOpacity>
          </View>
        )}
        renderItem={({ item, index }) => (
          <RenderPost navigation={navigation} post={item} thisUser={user} HeaderTitle="ProfileScreen" setOpenEditPostPopUp={setOpenEditPostPopUp} />
        )}
      />
    </SafeAreaView>
  );
}

