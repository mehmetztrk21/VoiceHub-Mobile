
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Footer from './components/footer';
import Post from './components/post';

export default function App() {


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

      <Footer></Footer>
    </SafeAreaView>
  );
}

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
});
