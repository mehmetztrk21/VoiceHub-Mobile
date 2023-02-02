import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

function Profile(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.username}>k.kayserili</Text>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2549/2549922.png"}} style={{ width: 50, height: 50 }} />
            </View>

            
        </SafeAreaView>
    );
}
export default Profile;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#212121',
        flex:1,
    },
    banner:{
        backgroundColor:'#212121',
        
    },
    username:{
        fontWeight:'bold',
        color:'#ff6101',
        fontSize:24,
    },
});