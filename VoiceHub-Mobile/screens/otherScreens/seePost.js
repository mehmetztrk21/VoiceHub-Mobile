import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import seePostStyle from "../../assets/styles/seePost.style";
import user1 from "../../assets/userImages/user1.jpg";
import OtherHeader from "../components/otherHeader";
import Post from "../components/post";
import PostActions from "../components/postActions";
import RenderPost from "../components/RenderPost";
import AddVoice from "../components/addVoice";
import colors from '../../assets/colors';

/* HALF SCREEN, CONTINUE THIS PAGE */
export default function SeePost({ navigation, route }) {
    const { uName, isYourProfile } = route.params;

    return (
        <SafeAreaView style={seePostStyle.container}>

            <OtherHeader HeaderTitle={"Post"} navigation={navigation} />

            <View>
                <Image source={user1} style={{ width: 300, height: 300, borderRadius: 150, }} />
                <Text>{uName}</Text>
                <Post />
                <PostActions />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={seePostStyle.scroll}
            >
                <View style={[seePostStyle.postView, { background: 'linear-gradient(to right, ' + colors.green + ', ' + colors.tealGreen + ')' }]}>
                    <RenderPost navigation={navigation} />
                </View>
            </ScrollView>

            <AddVoice bottomSize={0}/>
        </SafeAreaView>
    );
}