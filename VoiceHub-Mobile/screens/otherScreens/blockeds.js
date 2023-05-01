import React, { useEffect, useRef, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";
import colors from "../../assets/colors";
import { getUserById } from "../../services/userServices";
import BlockedItem from "../components/blockedItem";
import OtherHeader from "../components/otherHeader";

const Blockeds = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false);

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

    const [userIds, setUserIds] = useState([]); //engellediklerimizin id'leri burada gözükecek
    const [users, setUsers] = useState({}); //engellediklerimizin resim username gibi bilgileri burada gözükecek

    useEffect(() => {
        /*burada useUser'dan aldığımız id ile birlikte veritabanından engellediğimiz kişilerin id'lerini sorgulayıp bilgilerini çekeceğiz 
        ve aşağıda mapleme yapacağız*/

        getUserById({ id: userIds?._id }).then(async (res) => {
            setUsers(res?.data);
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    return (
        <SafeAreaView style={{ width: "100%", flex: 1, backgroundColor: colors.white, }}>
            <OtherHeader navigation={navigation} HeaderTitle={"Blocked Accounts"} isTic={false} />

            <ScrollView style={{ paddingHorizontal: "7.5%", marginTop: "5%", }} ref={scrollViewRef}
                onLayout={handleLayout} refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />
                } >
                {/* mapleme yapacağız */}
                {userIds.length != 0 ?
                    < BlockedItem blockedUser={item} />

                    : <View style={{ marginTop: "20%" }}>
                        <Text style={{ textAlign: "center", marginBottom: 20, color: colors.green, fontWeight: "700", fontSize: 16, textAlign: "center" }}>
                            Engellediğiniz Kullanıcı Yok
                        </Text>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Blockeds