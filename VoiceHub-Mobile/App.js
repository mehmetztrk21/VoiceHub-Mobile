import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';

export default function App() {

  const Posts = (props) => {
    return (
      <View style={styles.Posts}>
        <Text style={styles.UserName}>Kaan</Text>

        <View style={styles.PostContents1}>
          <Image style={styles.UserPhoto} source={{ uri: "https://picsum.photos/50", width: 50, height: 50 }} />
          <Pressable>
            <Image style={styles.UserPhoto} source={{ uri: "https://cdn.iconscout.com/icon/free/png-512/play-button-1659428-1408818.png?w=256&f=avif", width: 35, height:35 }} />
          </Pressable>
          <Slider style={styles.Slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#ff6101"
          maximumTrackTintColor="#555555"/>
        </View>

      </View>
    );
  }

  return (
    <View style={styles.background}>
      <View style={styles.banner}>
        <StatusBar style="auto" />
        <Text style={styles.AnaYazi}>VoiceHub</Text>

      </View>

      <View style={styles.contents}>
        <Posts></Posts>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#212121',
    flex: 1,
  },
  banner: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  AnaYazi: {
    color: '#ff6101',
    fontWeight: 'bold',
    fontSize: 32,

  },
  Posts: {
    borderColor: '#ff6101',
    borderWidth: 3,
    borderRadius: 10,
    width: "80%",
    marginLeft: "10%",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,

  },
  UserName: {
    color: "#ff6101",
    fontWeight: 'bold',

  },
  PostContents: {

  },
  UserPhoto: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
  },
  Slider:{
    width:"50%",
  }
});
