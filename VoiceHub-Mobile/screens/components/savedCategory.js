import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import savedCategoryStyle from "../../assets/styles/savedCategory.style";
import user1 from "../../assets/userImages/user1.jpg"

/* HALF SCREEN, CONTINUE THIS PAGE */
export default class SavedCategoryScreen extends React.Component {  
  render() {  
    return (  
      <View style={savedCategoryStyle.categories}>
        {/* map kullanacagim */}
          <ImageBackground source={user1} style={savedCategoryStyle.categoryImg} imageStyle={{borderRadius:20,}}>
            <Text style={savedCategoryStyle.categoryName}>Category Name</Text>
          </ImageBackground>
      </View>
    );  
  }  
} 