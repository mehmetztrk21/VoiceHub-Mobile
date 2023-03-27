export const FollowFollowerButtonText = (isYouFollowing, isYourFollower) => {

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
