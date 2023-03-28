import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import postUserInfoStyle from "../../assets/styles/postUserInfo.style";
import ver from "../../assets/ver.png"

const user = {
    name: "Mehmet",
    surname: "Öztürk",
    username: "mehmet.ztrk"
} //TODO: get in localStorage

export default function PostUserInfo(
    { navigation, userPic, userName, HeaderTitle,
        setOpenEditPostPopUp, setOpenArchivePopUp,
        visible, date, isVerify, isYouFollowing, hasBio, isYourFollower, id }) {

    const [differenceInDays, setDifferenceInDays] = useState("0");

    useEffect(() => {
        console.log("kaaaaaaaaaaaaaaaa",id);

        const currentDate = new Date();
        const postDate = new Date(date);
        const differenceInMs = currentDate.getTime() - postDate.getTime();
        const msInOneYear = 1000 * 60 * 60 * 24 * 365;
        const msInOneMonth = 1000 * 60 * 60 * 24 * 30;
        const msInOneWeek = 1000 * 60 * 60 * 24 * 7;
        const msInOneDay = 1000 * 60 * 60 * 24;
        const msInOneHour = 1000 * 60 * 60;
        const msInOneMin = 1000 * 60;
        const msInOneSec = 1000;

        if (differenceInMs / msInOneYear >= 1) {
            setDifferenceInDays(Math.floor(differenceInMs / msInOneDay) + "yr");
        }
        else if (differenceInMs / msInOneMonth >= 1) {
            setDifferenceInDays(Math.floor(differenceInMs / msInOneDay) + "mo");
        }
        else if (differenceInMs / msInOneWeek >= 1) {
            setDifferenceInDays(Math.floor(differenceInMs / msInOneDay) + "week");
        }
        else if (differenceInMs / msInOneDay >= 1) {
            setDifferenceInDays(Math.floor(differenceInMs / msInOneDay) + "day");
        }
        else if (differenceInMs / msInOneHour >= 1) {
            setDifferenceInDays(Math.floor(differenceInMs / msInOneHour) + "h");
        }
        else if (differenceInMs / msInOneMin >= 1) {
            setDifferenceInDays(Math.floor(differenceInMs / msInOneMin) + "min");
        }
        else if (differenceInMs / msInOneSec >= 1) {
            setDifferenceInDays(Math.floor(differenceInMs / msInOneSec) + "sec");
        }
        else {
            setDifferenceInDays("0");
        }
    }, []);


    return (
        <View style={postUserInfoStyle.postUser}>

            <TouchableOpacity style={postUserInfoStyle.clickUserPic}
                onPress={() => {
                    if (userName == user.username) {
                        navigation.navigate('ProfileScreen', { uName: userName, isVerified: isVerify });
                    }
                    else {
                        navigation.navigate('SeeProfile', { uName: userName, isVerified: isVerify, visible: visible, isYouFollowing: isYouFollowing, isYourFollower: isYourFollower, hasBio: hasBio });
                    }
                }}>
                <Image style={postUserInfoStyle.userpostImg} source={userPic} />

                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={postUserInfoStyle.userName}>{userName}</Text>
                        {isVerify ? (
                            <Image style={{ width: 14, height: 14, marginLeft: 4 }} source={ver} />
                        ) : null}
                    </View>
                    <Text style={postUserInfoStyle.timeAgo}>{differenceInDays}</Text>
                </View>

            </TouchableOpacity>

            <View style={{ marginRight: 16 }}>
                {HeaderTitle == 'ProfileScreen' ? (
                    <TouchableOpacity onPress={() => { setOpenEditPostPopUp(id ? id : false) }}>
                        <Icon type={'font-awesome'} name={'ellipsis-v'} size={28} />
                    </TouchableOpacity>
                ) : HeaderTitle == 'Archived' ? (
                    <TouchableOpacity onPress={() => { setOpenArchivePopUp(id ? id : false) }}>
                        <Icon type={'font-awesome'} name={'ellipsis-v'} size={28} />
                    </TouchableOpacity>
                ) : null}
            </View>

        </View>
    );
}
