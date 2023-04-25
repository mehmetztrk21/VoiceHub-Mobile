export const FollowFollowerButtonText = (title, followersId, followingsId, id) => {
    //item.followings.find(i => i?.toString() == id.toString())

    if (title == "FollowFollower") {
        if (followersId == id && followingsId == id) {
            return "Following";
        }
        else if (followersId == id && !(followingsId == id)) {
            return "Following";
        }
        else if (!(followersId == id) && followingsId == id) {
            return "Follow Too";
        }
        else if (!(followersId == id) && !(followingsId == id)) {
            return "Follow";
        }
        else {
            return "hata";
        }
    }

    else if (title == "SeeLikes") {

    }
    else {
        return " ";
    }
}
