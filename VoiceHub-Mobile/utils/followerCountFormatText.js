export const followerCountFormatText = (count) => {

    if (count >= 1000000) {
        return `${Math.floor(user["followers"]?.length / 1000000)},${Math.floor((user["followers"]?.length) / 100000)}M`
    }
    else if (count >= 1000) {
        return `${Math.floor(user["followers"]?.length / 1000)},${Math.floor((user["followers"]?.length) / 100)}K`
    }
    else {
        return count
    }

}