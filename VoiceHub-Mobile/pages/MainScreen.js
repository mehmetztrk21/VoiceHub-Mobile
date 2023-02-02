import { StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable, Image } from 'react-native';
import React from 'react';
import Post from '../components/post';

function MainScreen(props) {
  function gotoProfile() {
    props.navigation.navigate('Profile');
    console.log("Go to register page");
}
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.banner}>
        <Text style={styles.AnaYazi}>VoiceHub</Text>
      </View>

      <View style={styles.contents}>
        <ScrollView>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Pressable>
          <Image style={styles.Main} source={{ uri: "https://cdn-icons-png.flaticon.com/512/9055/9055175.png", width: 50, height: 50, }} />
        </Pressable>

        <Pressable>
          <Image style={styles.Store} source={{ uri: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png", width: 50, height: 50, }} />
        </Pressable>

        <Pressable onPress={()=> gotoProfile()}>
          <Image style={styles.Profile} source={{ uri: "https://cdn-icons-png.flaticon.com/512/456/456283.png", width: 50, height: 50, }} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    padding: "2%",
    flex: 1,
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
  },
});
