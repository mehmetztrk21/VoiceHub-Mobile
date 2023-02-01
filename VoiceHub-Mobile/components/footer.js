import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

class Footer extends React.Component {
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#252525",
    flexDirection: 'row',
    paddingTop: "2%",
    paddingBottom: "2%",
    marginTop: "2%",
    justifyContent: 'space-evenly',//eşit aralıklarda boşluk bırak
  },
});

export default Footer;
