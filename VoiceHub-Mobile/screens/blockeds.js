import React, { useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";

import colors from "../assets/colors";

import { useUser } from "../utils/userContext";

import { blockedUsers } from "../services/userServices";

import BlockedItem from "./components/blockedItem";
import OtherHeader from "./components/otherHeader";
import Loading from "./components/loading";

const Blockeds = ({ navigation }) => {
    const { user } = useUser();

    const [users, setUsers] = useState([]); //engellediklerimizin id'leri burada gözükecek
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);

    const scrollViewRef = useRef();

    const pullThePage = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false)
        }, 800)
    }

    const handleLayout = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    useEffect(() => {
        setLoading(true);
        blockedUsers().then(async (res) => {
            setUsers(res?.data);
        }).catch((err) => {
            console.log(err);
        })
        setLoading(false);
    }, [])

    useEffect(() => {
        setLoading(true);
        blockedUsers().then(async (res) => {
            setUsers(res?.data);
        }).catch((err) => {
            console.log(err);
        })
        setLoading(false);
    }, [user])


    if (loading) {
        return <Loading />
    }

    return (
        <SafeAreaView style={{ width: "100%", flex: 1, backgroundColor: colors.white, }}>
            <OtherHeader navigation={navigation} HeaderTitle={"Blocked Accounts"} isTic={false} />

            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                refreshing={refreshing}
                onRefresh={pullThePage}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => pullThePage()}
                        colors={[colors.green]}
                    />
                }
                renderItem={({ item, index }) => (
                    <BlockedItem navigation={navigation} blockedUser={item} index={index} />
                )}
                ListEmptyComponent={
                    <View style={{ marginTop: "20%" }}>
                        <Text
                            style={{
                                textAlign: "center",
                                marginBottom: 20,
                                color: colors.green,
                                fontWeight: "700",
                                fontSize: 16,
                                textAlign: "center",
                            }}
                        >
                            There are no users you have blocked
                        </Text>
                    </View>
                }
                contentContainerStyle={{
                    paddingHorizontal: "7.5%",
                    marginTop: "25%",
                }}
            />

        </SafeAreaView>
    )
}

export default Blockeds
