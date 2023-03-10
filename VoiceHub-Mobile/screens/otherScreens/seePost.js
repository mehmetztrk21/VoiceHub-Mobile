import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import colors from '../../assets/colors';
import seePostStyle from "../../assets/styles/seePost.style";
import user1 from "../../assets/userImages/user1.jpg";
import AddVoice from "../components/addVoice";
import OtherHeader from "../components/otherHeader";
import Post from "../components/post";
import PostActions from "../components/postActions";
import PostUserInfo from "../components/postUserInfo";

/* HALF SCREEN, CONTINUE THIS PAGE */
export default function SeePost({ navigation, route }) {
    const { uName, isYourProfile } = route.params;

    return (
        <SafeAreaView style={seePostStyle.container}>

            <OtherHeader HeaderTitle={"Post"} navigation={navigation} />

            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", top: 70 }}>
                <Image source={user1} style={{ width: 200, height: 200, borderRadius: 100, }} />
                <Text style={{ fontSize: 32, fontWeight: "800" }}>{uName}</Text>
                <Post />
                <PostActions />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={seePostStyle.scroll}
            >
                <View style={[seePostStyle.postView, { background: 'linear-gradient(to right, ' + colors.green + ', ' + colors.tealGreen + ')' }]}>
                    <View style={{
                        container: {
                            width: "90%",
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            marginHorizontal: "5%",
                            shadowColor: '#333333',
                            shadowOffset: {
                                width: 0,
                                height: 2,

                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,
                            elevation: 5,
                            borderRadius: 20,
                            marginVertical: 10,

                        },
                    }}>
                        <PostUserInfo navigation={navigation} userPic={user1} userName={uName} />
                        <View style={{ paddingLeft: '20%', paddingRight: '2.5%' }}>
                            <Post />
                        </View>
                        <PostActions navigation={navigation} />
                    </View>
                </View>
            </ScrollView>

            <AddVoice bottomSize={0} />
        </SafeAreaView>
    );
}