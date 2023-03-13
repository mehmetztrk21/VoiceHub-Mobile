import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import colors from '../../assets/colors';
import seePostStyle from "../../assets/styles/seePost.style";
import user1 from "../../assets/userImages/user1.jpg";
import AddVoice from "../components/addVoice";
import Comment from '../components/comment';
import OtherHeader from "../components/otherHeader";
import Post from "../components/post";
import PostActions from "../components/postActions";
import userPostData from '../components/userPostData';

const user = JSON.parse(localStorage.getItem("user"));
const username = user.username;

/* HALF SCREEN, CONTINUE THIS PAGE */
export default function SeePost({ navigation, route }) {
    const { uName } = route.params;

    return (
        <SafeAreaView style={[seePostStyle.container, { background: colors.grad }]}>

            <OtherHeader HeaderTitle={uName + "'s Post"} navigation={navigation} />

            <View style={{ backgroundColor: colors.white, top: 60, paddingBottom: 20, borderBottomRightRadius: 40, borderBottomLeftRadius: 40 }}>
                <Image source={user1} style={{ height: 200, width: 200, borderRadius: 100, marginVertical: 25, alignSelf: 'center' }} />

                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: '500', color: colors.black }}>{uName}</Text>

                <View style={{ paddingLeft: '20%', paddingRight: '2.5%' }}>
                    <Post />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', { uName: username })}>
                        <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}>#poem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', { uName: username })}>
                        <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}> #sports</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', { uName: username })}>
                        <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}> #motivation</Text>
                    </TouchableOpacity>
                </View>

                <PostActions navigation={navigation} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={seePostStyle.comments}>
                {
                    userPostData.map((item) => {
                        return (
                            <View style={{ backgroundColor: colors.white, borderRadius: 20, marginTop: 15, padding: 5 }}>
                                <Comment navigation={navigation} userPic={item.userPic} userName={item.userName} />
                            </View>
                        )
                    })
                }
            </ScrollView>

            <AddVoice bottomSize={0} />
        </SafeAreaView>
    );
}