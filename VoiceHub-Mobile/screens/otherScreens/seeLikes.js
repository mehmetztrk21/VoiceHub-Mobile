import React, { useEffect, useRef, useState } from "react";
import {
    Dimensions, RefreshControl, SafeAreaView, ScrollView, TextInput, View
} from "react-native";
import OtherHeader from "../components/otherHeader";
import LikeItem from "../components/LikeItem";

import { getUserById } from "../../services/userServices";

import colors from "../../assets/colors";
import seeLikesStyle from "../../assets/styles/seeLikes.style";
import { baseURL } from "../../utils/constants";

const { width } = Dimensions.get("window");

const SeeLikes = ({ navigation, route }) => {
    const { likes } = route.params;

    const [users, setUsers] = useState([]);

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

    useEffect(() => {
        if (likes && likes.length) { // added a check here
            likes.map((item) => {
                getUserById({ id: item })
                    .then(async (res) => {
                        setUsers((prevUsers) => [...prevUsers, res?.data]);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        }
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: colors.white, flex: 1, width: width }}>
            <OtherHeader HeaderTitle={"Likes"} navigation={navigation} isTic={false} />
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
                    {users?.map((item, index) => {
                        return (
                            <LikeItem navigation={navigation} key={index} userId={item._id} profilePhotoUrl={item.profilePhotoUrl} username={item.username} isTic={item.isTic} />
                        )
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SeeLikes