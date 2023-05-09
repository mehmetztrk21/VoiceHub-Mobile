import { View, Text, TouchableOpacity, Share } from "react-native"
import React, { useEffect, useState } from "react"
import colors from "../../assets/colors"
import PopUpPostStyles from "../../assets/styles/PopUpPost.style"

import { Icon } from "react-native-elements"

import { useUser } from "../../utils/userContext"

import { setFollowFollower, setLikedPost, setSavedPost, setSeeLikes } from "../../services/actionServices"
import { getPostById } from "../../services/postServices"
import { getUserById } from "../../services/userServices"

import AsyncStorage from "@react-native-async-storage/async-storage"

const PopUpPost = ({ id, setId, uri }) => {
    const { user, setUser } = useUser();
    const [post, setPost] = useState({});
    const [seeUser, setSeeUser] = useState({});

    useEffect(() => {
        getPostById({ postId: id }).then(async (res) => {
            setPost(res?.data);
            getUserById({ id: res?.data?.createdBy }).then(async (response) => {
                setSeeUser(response?.data);
            }).catch((err) => {

            });
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    const setSeeLike = async () => {
        await setSeeLikes({ postId: id });
        setId(false);
    }

    const postLiked = async () => {
        await setLikedPost({ postId: id });
        setId(false);
    };

    const postSave = async () => {
        await setSavedPost({ postId: id });
        setId(false);
    };

    const shareThisPost = async () => {
        try {
            Share.share({
                message: uri,
            });
        } catch (error) {
            console.error("Share error:", error);
        }
    }

    const followUnfollow = async () => {
        await setFollowFollower({ userId: seeUser._id }).then(async (res) => {
            if (res?.success) {
                let temp = { ...user };
                if (res.data == "Unfollowed successfully")
                    temp?.followings?.splice(temp?.followings?.indexOf(seeUser._id), 1);
                else
                    temp?.followings?.push(seeUser._id);
                setUser(temp);
                await AsyncStorage.setItem("user", JSON.stringify(temp));
                await getUser();
                setId(false);
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    const getUser = async () => {
        getUserById({ id: seeUser._id }).then(async (res) => {
            setSeeUser(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <View style={PopUpPostStyles.wrapper}>
            <View style={PopUpPostStyles.container}>

                {user?.posts?.includes(post?._id) ?
                    <TouchableOpacity style={PopUpPostStyles.buttonHolder} onPress={setSeeLike}>
                        <Icon type={"font-awesome"} name={post?.isLikesVisible == true ? "heart-o" : "heart"} size={28} color={colors.white} />
                        <Text style={PopUpPostStyles.text}>{post?.isLikesVisible == true ? "Unshow Likes" : "Show Likes"}</Text>
                    </TouchableOpacity> : null}

                <TouchableOpacity style={PopUpPostStyles.buttonHolder} onPress={postLiked}>
                    <Icon type={"font-awesome"} name={"heart-o"} size={28} color={colors.white} />
                    <Text style={PopUpPostStyles.text}>
                        {post?.likes?.includes(user?._id) ? "Unlike Post" : "Like Post"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={PopUpPostStyles.buttonHolder} onPress={postSave}>
                    <Icon type={"font-awesome"} name={"bookmark-o"} size={28} color={colors.white} />
                    <Text style={PopUpPostStyles.text}>
                        {user?.savedPosts?.includes(post?._id) ? "Unsave Post" : "Save Post"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={PopUpPostStyles.buttonHolder} onPress={shareThisPost}>
                    <Icon type={"font-awesome"} name={"share"} size={28} color={colors.white} />
                    <Text style={PopUpPostStyles.text}>Share This Post</Text>
                </TouchableOpacity>

                {user?._id != seeUser._id ?
                    <TouchableOpacity style={PopUpPostStyles.buttonHolder} onPress={followUnfollow}>
                        <Icon type={"feather"} name={user?.followings?.includes(seeUser?._id) ? "user-minus" : "user"} size={28} color={colors.white} />
                        <Text style={PopUpPostStyles.text}>
                            {user?.followings?.includes(seeUser?._id) ? "Unfollow" : "Follow"}
                        </Text>
                    </TouchableOpacity> : null}

                <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setId(false) }}>
                    <Text style={PopUpPostStyles.cancelText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default PopUpPost;