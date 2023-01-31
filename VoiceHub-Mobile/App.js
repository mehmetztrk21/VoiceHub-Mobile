import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';

export default function App() {
  //<Image style={styles.UserPhoto} source={{uri:"https://picsum.photos/100/100"}}/>
  //<Image style={styles.PlayButton} source={{ uri: "https://cdn.iconscout.com/icon/free/png-512/play-button-1659428-1408818.png?w=256&f=avif", width: 35, height:35 }} />
  const Posts = (props) => {
    return (
      <View style={styles.post}>
        <View style={styles.post_content1}>
          <Text style={styles.UserName}>Kaan</Text>
        </View>

        <View style={styles.post_content2}>
          <Image style={styles.UserPhoto} source={{ uri: "https://picsum.photos/100/100" }} />
          <Image style={styles.PlayButton} source={{ uri: "https://cdn-icons-png.flaticon.com/512/440/440796.png"}} />
          <Slider style={{width:20}}></Slider>
        </View>

        <View style={styles.post_content3}>
          <Text style={styles.length}>0:23</Text>
          <Text style={styles.time}>12:33</Text>
        </View>

        <View style={styles.post_content4}>
          <Image style={styles.Like} source={{ uri: "https://cdn.pixabay.com/photo/2017/06/13/12/51/thumb-2398752_960_720.png" }} />
          <Image style={styles.Comment} source={{ uri: "https://cdn.pixabay.com/photo/2017/08/27/16/05/balloon-2686568_960_720.png" }} />
          <Image style={styles.Save} source={{ uri: "https://cdn-icons-png.flaticon.com/512/5667/5667029.png" }} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Text style={styles.AnaYazi}>VoiceHub</Text>
      </View>

      <ScrollView style={styles.contents}>
        <Posts></Posts><Posts></Posts><Posts></Posts><Posts></Posts><Posts></Posts><Posts></Posts><Posts></Posts>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable>
          <Image style={styles.Main} source={{ uri: "https://cdn-icons-png.flaticon.com/512/9055/9055175.png", width: 50, height: 50, }} />
        </Pressable>

        <Pressable>
          <Image style={styles.Store} source={{ uri: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png", width: 50, height: 50, }} />
        </Pressable>

        <Pressable>
          <Image style={styles.Profile} source={{ uri: "https://cdn-icons-png.flaticon.com/512/456/456283.png", width: 50, height: 50, }} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    borderColor: "#ff6101",
    borderWidth: 3,
    borderRadius: 10,
    padding: "2%",
    marginBottom: "2.5%",
  },
  UserName: {
    color: "#ff6101",
    fontWeight: 'bold',
  },


  post_content2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: "2%",
    paddingTop:"1.5%",
  },
  UserPhoto: {
    width: 35, height: 35,
    borderRadius: 35,
  },
  PlayButton: {
    width: 35, height: 35,
  },


  post_content3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: "2%",
    paddingTop:"1.5%",
  },
  length: {
    color: "#ff6101",
  },
  time: {
    color: "#ff6101",
  },



  post_content4: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: "2%",
    paddingTop:"1.5%",
  },
  Like:{
    width: 35, height: 35,
  },
  Comment:{
    width: 35, height: 35,
  },
  Save:{
    width: 35, height: 35,
  },



  container: {
    flex: 1,
    backgroundColor: "#212121",
    padding: "2%",
  },
  banner: {
    marginBottom: "2%",
    padding: "1%",
    backgroundColor: "#252525",
  },
  AnaYazi: {
    fontSize: 32,
    color: "#FF6101",
    fontWeight: "bold",
    paddingLeft: "2%",
  },
  contents: {
    padding: "3%",
    backgroundColor: "#252525",
  },
  footer: {
    backgroundColor: "#252525",
    flexDirection: 'row',
    paddingTop: "2%",
    paddingBottom: "2%",
    marginTop: "2%",
    justifyContent: 'space-evenly',//eşit aralıklarda boşluk bırak
  }
});
