import React, { useState } from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  Modal,
} from "react-native";
import { Icon } from "react-native-elements";

import mypost2 from "../assets/images/mypost2.jpg";
import verfy from "../assets/ver.png";
import admin from "../assets/userImages/admin.jpg";

import Post from "../screens/components/post";

import Upload from "../screens/upload";
import Saved from "../screens/saved";
import ProfileEdit from "../screens/editProfile";
import Login from "../screens/login";

import profileStyles from '../assets/styles/profile.style';

const PostData = [
  { id: "1", PostPic: mypost2 },
  { id: "2", PostPic: mypost2 },
  { id: "3", PostPic: mypost2 },
  { id: "4", PostPic: mypost2 },
  { id: "5", PostPic: mypost2 },
  { id: "6", PostPic: mypost2 },
  { id: "7", PostPic: mypost2 },
  { id: "8", PostPic: mypost2 },
  { id: "9", PostPic: mypost2 },
  { id: "10", PostPic: mypost2 },
  { id: "11", PostPic: mypost2 },
  { id: "12", PostPic: mypost2 },
  { id: "13", PostPic: mypost2 },
  { id: "14", PostPic: mypost2 },
];
const isVerified=true;
export default function ProfileScreen() {
  // Rendering Post with arrays
  const RenderPost = ({ PostData }) => {
    return PostData.map((item) => (
      <TouchableOpacity style={{ paddingBottom: 15 }}>
        <Image source={item.PostPic} style={{width:50, height:50,}}/>
        <Post/>
      </TouchableOpacity>
    ));
  };
  const [uploadVisible, setUploadVisible] = useState(false);
  const [saveVisible, setSaveVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [logoutVisible, setLogOutVisible] = useState(false);

  return (
        <View style={profileStyles.container}>
          <Modal visible={uploadVisible} onRequestClose={()=>{setUploadVisible(!uploadVisible)}}>
            <Upload/>
          </Modal>

          <Modal visible={saveVisible} onRequestClose={()=>{setSaveVisible(!saveVisible)}}>
            <Saved/>
          </Modal>

          <Modal visible={editVisible} onRequestClose={()=>{setEditVisible(!editVisible)}}>
            <ProfileEdit/>
          </Modal>

          <Modal visible={logoutVisible} onRequestClose={()=>{setLogOutVisible(!logoutVisible)}}>
            <Login/>
          </Modal>

          <View style={profileStyles.aHeadView}>

            <View style={profileStyles.leftTop}>
              <Text style={profileStyles.head}>k.kayserili</Text>
              {isVerified?(
                <Image source={verfy} style={profileStyles.ver}/>
              ):null}
            </View>

            <View style={profileStyles.rightTop}>
              <TouchableOpacity style={profileStyles.pactions} onPress={() => { setSaveVisible(true); }}>
                <Icon type="feather" size={28} name={"save"} />
              </TouchableOpacity>

              <TouchableOpacity style={profileStyles.pactions} onPress={() => { setUploadVisible(true); }}>
                <Icon type="feather" size={28} name={"plus"} />
              </TouchableOpacity>
            </View>

          </View>
          
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={profileStyles.profileScroll}
          >
            {/* Profile heads */}
            <View style={profileStyles.actView}>
              <Image source={admin} style={profileStyles.userPic} />
              <View style={profileStyles.followContents}>

                <View style={profileStyles.postCount}>
                  <Text style={profileStyles.fNumber}>47</Text>
                  <Text style={profileStyles.fText}>Post</Text>
                </View>

                <View style={profileStyles.followerCount}>
                  <Text style={profileStyles.fNumber}>1M</Text>
                  <Text style={profileStyles.fText}>Followers</Text>
                </View>

                <View style={profileStyles.followCount}>
                  <Text style={profileStyles.fNumber}>150</Text>
                  <Text style={profileStyles.fText}>Following</Text>
                </View>

              </View>
            </View>

            {/* Bio */}
            <View style={profileStyles.bioCont}>
              <Text style={profileStyles.name}>Kaan Kayserili | Software Developer</Text>
              <Post />{/*User Bio*/}
            </View>

            {/* Edit Profile Buttons */}
            <View style={profileStyles.btnHolder}>
              <TouchableOpacity style={profileStyles.editProfile} onPress={()=>{setEditVisible(true);}}>
                <Text style={profileStyles.btnTextF}>Edit Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={profileStyles.logOut} onPress={()=>{setLogOutVisible(true);}}>
                <Text style={profileStyles.btnTextF}>Log Out</Text>
              </TouchableOpacity>
            </View>

            {/* Posts */}

            <View style={profileStyles.postView}>
              <RenderPost PostData={PostData}/>
            </View>
          </ScrollView>
        </View>
  );
}


