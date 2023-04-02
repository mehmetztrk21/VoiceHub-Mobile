export const FollowFollowerButtonText = (title, item, id) => {

    if (title == "Followings") {
        if (item.followers.find(i => i?.toString() == id.toString())) {
            return "Following";
        }
        else {
            return "Following";
        }
    }
    else if (title == "Followers") {
        if (item.followings.find(i => i?.toString() == id.toString())) {
            return "Following";
        }
        else {
            return "Follow Too";
        }
    }
    else if (title == "SeeLikes") {
        //coming soon
    }
    else {
        return ""
    }
    return ""
}
