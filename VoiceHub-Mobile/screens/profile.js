import React from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import PostImg from "../screens/components/profileGrid";

import mypost from "../assets/images/mypost.jpg";
import mypost2 from "../assets/images/mypost2.jpg";
import mypost3 from "../assets/images/mypost3.jpg";
import mypost4 from "../assets/images/mypost4.jpg";
import mypost5 from "../assets/images/mypost5.jpg";
import mypost6 from "../assets/images/mypost6.jpg";
import mypost7 from "../assets/images/mypost7.jpg";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import verfy from "../assets/ver.png";
import admin from "../assets/userImages/admin.jpg";

const PostData = [
  { id: "1", PostPic: mypost },
  { id: "2", PostPic: mypost2 },
  { id: "3", PostPic: mypost3 },
  { id: "4", PostPic: mypost4 },
  { id: "5", PostPic: mypost5 },
  { id: "6", PostPic: mypost6 },
  { id: "7", PostPic: mypost7 },
];

export default function ProfileScreen() {
  // Rendering Post with arrays
  const RenderPost = ({ PostData }) => {
    return PostData.map((item) => (
      <PostImg key={item.id} postImg={item.PostPic} />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.aHeadView}>
        <Text style={styles.head}>k.kayserili</Text>
        <Image source={verfy} style={styles.ver} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.profileScroll}
      >
        {/* Profile heads */}
        <View style={styles.actView}>
          <Image source={admin} style={styles.userPic} />
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={styles.fView1}>
              <Text style={styles.actText}>47</Text>
              <Text style={styles.actText}>1M</Text>
              <Text style={styles.actText}>150</Text>
            </View>
            <View style={styles.fView}>
              <Text style={styles.actText2}>Post</Text>
              <Text style={styles.actText2}>Followers</Text>
              <Text style={styles.actText2}>Following</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioCont}>
          <Text style={styles.name}>Kaan Kayserili | Software Developer</Text>
        </View>

        {/* Follow n Buttons */}
        <View style={styles.btnHolder}>
          <TouchableOpacity style={styles.follow}>
            <Text style={styles.btnTextF}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Posts */}

        <View style={styles.postView}>
          <RenderPost PostData={PostData} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  aHeadView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 90,
    width: "90%",
    marginTop: 22,
    flexDirection: "row",
    alignItems: "center",
  },

  head: {
    fontSize: 22,
    padding: 20,
    paddingRight: 8,
    fontWeight: "bold",
  },

  ver: {
    height: 22,
    width: 22,
  },

  profileScroll: {
    marginTop: 100,
    width: "100%",
    marginLeft: 1,
  },

  actView: {
    flexDirection: "row",
    padding: 10,

    top: 0,
    left: 5,

    width: "95%",
  },

  fView1: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 20,

    height: 0,
  },

  fView: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 20,
  },

  userPic: {
    width: 90,
    height: 90,

    borderRadius: 50,
    margin: 10,
    marginLeft: 4,
    marginVertical: 3,
    borderWidth: 3,
    borderColor: "black",
  },

  actText: {
    flexDirection: "row",
    flex: 1,
    fontSize: 20,
    textAlign: "center",

    fontWeight: "bold",
  },

  actText2: {
    flexDirection: "row",
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 0,
  },

  bioCont: {
    width: "95%",
    padding: 10,

    paddingLeft: 15,
    paddingTop: 5,
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
  },

  catg: {
    color: "grey",
  },
  btnHolder: {
    marginBottom:"2%",
    marginTop:"1%",
  },


  follow: {
    backgroundColor: "#0095f6",
    borderRadius: 5,
    width:"85%",
    marginLeft:"7.5%",
    paddingTop:"2%",
    paddingBottom:"2%",
    
  },
  msg: {
    backgroundColor: "white",
    paddingLeft: 30,
    paddingVertical: 7,

    borderRadius: 5,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "black",
  },
  btnTextF: {
    fontSize: 16,
    color: "white",
    paddingLeft:"42.5%",
  },

  btnTextM: {
    fontSize: 15,
  },

  iconCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    backgroundColor: "whitesmoke",
    marginTop: 30,
    paddingVertical: 8,
  },

  icons: {
    marginHorizontal: 50,
  },

  postView: {
    backgroundColor: "white",
    paddingTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",

    alignItems: "center",
  },
});
