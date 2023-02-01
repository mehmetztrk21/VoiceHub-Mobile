import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Slider from '@react-native-community/slider';

class Post extends React.Component {
  render() {
return (
    <View style={styles.post}>
      <View style={styles.post_content1}>
        <Text style={styles.UserName}>Kaan</Text>
      </View>

      <View style={styles.post_content2}>
        <Image style={styles.UserPhoto} source={{ uri: "https://picsum.photos/100/100" }} />
        <Image style={styles.PlayButton} source={{ uri: "https://cdn-icons-png.flaticon.com/512/440/440796.png" }} />
        <Slider style={{ width: 20 }}></Slider>
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
        paddingTop: "1.5%",
      },
      UserPhoto: {
        width: 35, 
        height: 35,
        borderRadius: 35,
      },
      PlayButton: {
        width: 35, 
        height: 35,
      },
    
    
      post_content3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: "2%",
        paddingTop: "1.5%",
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
        paddingTop: "1.5%",
      },
      Like: {
        width: 35, height: 35,
      },
      Comment: {
        width: 35, height: 35,
      },
      Save: {
        width: 35, height: 35,
      },

});

export default Post;