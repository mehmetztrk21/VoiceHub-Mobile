import React, { useEffect, useRef, useState } from "react";
import {
    Dimensions, FlatList, RefreshControl, SafeAreaView, ScrollView, TextInput, View
} from "react-native";
import LikeItem from "./components/LikeItem";
import OtherHeader from "./components/otherHeader";

import { getUserById } from "../services/userServices";

import colors from "../assets/colors";
import seeLikesStyle from "../assets/styles/seeLikes.style";
import { useUser } from "../utils/userContext";
import Loading from "./components/loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

const SeeLikes = ({ navigation, route }) => {
    const { likes } = route.params;
    const { user } = useUser();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const scrollViewRef = useRef(null);

    const handleLayout = () => {
        scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
    };

    const [refreshing, setRefreshing] = useState(false);

    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false)
        }, 800)
    }

    useEffect(() => {
        setLoading(true);
        if (likes && likes.length) { // added a check here
            likes.map((item) => {
                getUserById({ id: item })
                    .then(async (res) => {
                        if (res?.message == "Unauthorized") {
                            await AsyncStorage.clear();
                            navigation.navigate("Login");
                        }
                        else {
                            setUsers((prevUsers) => [...prevUsers, res?.data]);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <SafeAreaView style={seeLikesStyle.container}>
            <OtherHeader HeaderTitle={"Likes"} navigation={navigation} isTic={false} />
            <View style={seeLikesStyle.content}>
                <View style={[seeLikesStyle.searchBarHolder, { marginBottom: width * 0.07 }]}>
                    <TextInput
                        placeholder="Search"
                        style={seeLikesStyle.searchBar}
                    />
                </View>

                <FlatList
                    style={seeLikesStyle.scroll}
                    data={users}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item, index }) => (
                        <LikeItem
                            navigation={navigation}
                            userId={item._id}
                            profilePhotoUrl={item.profilePhotoUrl}
                            username={item.username}
                            isTic={item.isTic}
                            key={index}
                        />
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => pullThePage()}
                            colors={[colors.green]}
                        />
                    }
                />

            </View>
        </SafeAreaView>
    )
}

export default SeeLikes