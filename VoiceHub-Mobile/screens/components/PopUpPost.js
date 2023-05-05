import { View, Text, TouchableOpacity, Share } from "react-native"
import React, { useEffect, useState } from "react"
import colors from "../../assets/colors"
import { Icon } from "react-native-elements"
import { useUser } from "../../utils/userContext"
import { setLikedPost, setSavedPost, setSeeLikes } from "../../services/actionServices"
import { getPostById } from "../../services/postServices"
import { getUserById } from "../../services/userServices"

const PopUpPost = ({ id, setId, uri }) => {
    const { user } = useUser();
    const [post, setPost] = useState({});
    const [seeUser, setSeeUser] = useState({});

    useEffect(() => {
        getPostById({ postId: id }).then(async (res) => {
            setPost(res?.data);
            console.log(res?.data);
            getUserById({ id: res?.data?.createdBy }).then(async (response) => {
                setSeeUser(response?.data);
                console.log(response?.data);
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

    return (
        <View style={{
            flex: 1,
            width: "70%",
            alignSelf: "center",
            justifyContent: "center",
        }}>
            <View style={{
                width: "100%",
                alignSelf: "center",
                justifyContent: "center",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
                backgroundColor: colors.green,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 1,
                shadowRadius: 4,
                elevation: 10,
            }}>

                {user?.posts?.includes(post?._id) ?
                    <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }} onPress={setSeeLike}>
                        <Icon type={"font-awesome"} name={post?.isLikesVisible == true ? "heart-o" : "heart"} size={28} color={colors.white} />
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "700",
                            paddingBottom: 5,
                            paddingHorizontal: 5,
                            textAlign: "center",
                            color: colors.white,
                        }}>{post?.isLikesVisible == true ? "Unshow Likes" : "Show Likes"}</Text>
                    </TouchableOpacity> : null}

                <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }} onPress={postLiked}>
                    <Icon type={"font-awesome"} name={"heart-o"} size={28} color={colors.white} />
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "700",
                        paddingBottom: 5,
                        paddingHorizontal: 5,
                        textAlign: "center",
                        color: colors.white,
                    }}>{post?.likes?.includes(user?._id) ? "Unlike Post" : "Like Post"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }} onPress={postSave}>
                    <Icon type={"font-awesome"} name={"bookmark-o"} size={28} color={colors.white} />
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "700",
                        paddingBottom: 5,
                        paddingHorizontal: 5,
                        textAlign: "center",
                        color: colors.white,
                    }}>{user?.savedPosts?.includes(post?._id) ? "Unsave Post" : "Save Post"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }} onPress={shareThisPost}>
                    <Icon type={"font-awesome"} name={"share"} size={28} color={colors.white} />
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "700",
                        paddingBottom: 5,
                        paddingHorizontal: 5,
                        textAlign: "center",
                        color: colors.white,
                    }}>Share This Post</Text>
                </TouchableOpacity>

                {user?._id != seeUser._id ?
                    <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }} onPress={() => { }}>
                        <Icon type={"feather"} name={user?.followings?.includes(seeUser?._id) ? "user-minus" : "user"} size={28} color={colors.white} />
                        <Text style={{
                            color: colors.red, fontSize: 15,
                            fontWeight: "700",
                            paddingBottom: 5,
                            paddingHorizontal: 5,
                            textAlign: "center",
                            color: colors.white,
                        }}>{user?.followings?.includes(seeUser?._id) ? "Unfollow" : "Follow"}</Text>
                    </TouchableOpacity> : null}

                <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setId(false) }}>
                    <Text style={{
                        color: colors.green, fontSize: 14, textAlign: "center", fontWeight: "600",
                        backgroundColor: colors.white, padding: 10, borderRadius: 10,
                    }}>Close</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default PopUpPost;