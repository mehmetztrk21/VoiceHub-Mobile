import React, { useEffect, useRef, useState } from "react";
import {
    Dimensions, FlatList, RefreshControl, SafeAreaView,
    TextInput, View
} from "react-native";
import LikeItem from "./components/LikeItem";
import Loading from "./components/loading";
import OtherHeader from "./components/otherHeader";
import Alert from "./components/alert";

import { getUserById } from "../services/userServices";

import colors from "../assets/colors";
import seeLikesStyle from "../assets/styles/seeLikes.style";

import { checkInternetConnection } from "../utils/NetworkUtils";
import { useUser } from "../utils/userContext";

import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

const SeeLikes = ({ navigation, route }) => {
    const { likes, setShowAlert, setAlertMessage } = route.params;
    const { user } = useUser();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)

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
                checkInternetConnection(setShowAlert, setAlertMessage, setRefreshing, setLoading);
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
                    keyExtractor={(index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <LikeItem
                            navigation={navigation}
                            userId={item._id}
                            profilePhotoUrl={item.profilePhotoUrl}
                            username={item.username}
                            isTic={item.isTic}
                            setShowAlert={setShowAlert}
                            setAlertMessage={setAlertMessage}
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
            <Alert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />
        </SafeAreaView>
    )
}

export default SeeLikes