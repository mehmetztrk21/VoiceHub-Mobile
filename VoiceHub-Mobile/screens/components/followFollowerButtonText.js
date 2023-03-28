import { useState } from "react";
import { setFollowFollower } from "../../services/postServices";



export const FollowFollowerButtonText = ({ userId }) => {

    useState(async () => {
        const response = await setFollowFollower({ userId: userId });
        console.log(response);
        if (response && response.success) {
            let temp = response.data.map((item) => {
                console.log(item.categories, "item.categories")
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
                    isSaved: false,
                    isLiked: true,
                    date: "12/02/2023 12:41",
                    isYourFollower: true,
                    isYouFollowing: true,
                    commentCount: 12,
                    hasBio: false,
                    isVerify: false,
                }
            });
        }
    },[])

    if ((isYouFollowing == true && isYourFollower == true) || (isYouFollowing == true && isYourFollower == false)) {
        return "Following";
    }
    else if (isYouFollowing == false && isYourFollower == true) {
        return "Follow Too";
    }
    else if (isYouFollowing == false && isYourFollower == false) {
        return "Follow";
    }
    else {
        return "Loading...";
    }
}
