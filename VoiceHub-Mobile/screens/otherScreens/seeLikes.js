import React, { useRef, useState } from "react";
import {
    Dimensions, Image, RefreshControl, SafeAreaView, ScrollView, Text, TextInput,
    TouchableOpacity, View
} from "react-native";
import { FollowFollowerButtonText } from "../../utils/followFollowerButtonText";
import OtherHeader from "../components/otherHeader";
import userPostData from "../components/userPostData";

import colors from "../../assets/colors";
import seeLikesStyle from "../../assets/styles/seeLikes.style";
import ver from "../../assets/ver.png";

const { width } = Dimensions.get("window");

const SeeLikes = ({ navigation, route }) => {
    const { title } = route.params;

    const scrollViewRef = useRef(null);

    const handleLayout = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    const [refreshing, setRefreshing] = useState(false);

    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false)
        }, 800)
    }

    return (
        <SafeAreaView>
            <OtherHeader HeaderTitle={"Likes"} navigation={navigation} />
            <View style={{ marginTop: width * 0.05, backgroundColor: colors.white }}>
                <View style={[seeLikesStyle.searchBarHolder, { marginBottom: width * 0.07 }]}>
                    <TextInput
                        placeholder="Search"
                        style={seeLikesStyle.searchBar}
                    />
                </View>

                <ScrollView style={seeLikesStyle.scroll} ref={scrollViewRef} onLayout={handleLayout}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
                    } >
                    {
                        userPostData.map((item, index) => {
                            return (
                                <View style={seeLikesStyle.item} key={index}>
                                    <TouchableOpacity style={seeLikesStyle.seeProfile}
                                        onPress={() => navigation.navigate("SeeProfile", { userId: "1" })} >
                                        <Image source={item.userPic} style={seeLikesStyle.profileImage} />
                                        <Text style={seeLikesStyle.userName}>{item.userName}</Text>
                                        {true ? (
                                            <Image source={ver} style={{ width: 14, height: 14, paddingLeft: 4, alignSelf: "center" }} />
                                        ) : null}
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{
                                        width: "30%",
                                        alignItems: "center",
                                        padding: "2%",
                                        backgroundColor: colors.green,
                                        borderRadius: 12.5,
                                    }}>
                                        <Text style={{ color: colors.white, fontSize: 16, fontWeight: "600", }}>
                                            Follow
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SeeLikes