import React, { useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, SafeAreaView, Text, View } from "react-native";

import colors from "../assets/colors";

import { useUser } from "../utils/userContext";
import { checkInternetConnection } from "../utils/NetworkUtils"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { blockedUsers } from "../services/userServices";

import Alert from "./components/alert";
import BlockedItem from "./components/blockedItem";
import Loading from "./components/loading";
import OtherHeader from "./components/otherHeader";

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

    useEffect(() => {
        setLoading(true);
        checkInternetConnection(setShowAlert, setAlertMessage, setRefreshing, setLoading);
        blockedUsers().then(async (res) => {
            if (res?.data?.message == "Unauthorized") {
                await AsyncStorage.clear();
                navigation.navigate("Login");
            }
            else {
                setUsers(res?.data);
            }
        }).catch((err) => {
            console.log(err);
        })
        setLoading(false);
    }, [])

    useEffect(() => {
        setLoading(true);
        checkInternetConnection(setShowAlert, setAlertMessage, setRefreshing, setLoading);
        blockedUsers().then(async (res) => {
            if (res?.data?.message == "Unauthorized") {
                await AsyncStorage.clear();
                navigation.navigate("Login");
            }
            else {
                setUsers(res?.data);
            }
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
                    <BlockedItem navigation={navigation} blockedUser={item} key={index} />
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
            <Alert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />
        </SafeAreaView>
    )
}

export default Blockeds
