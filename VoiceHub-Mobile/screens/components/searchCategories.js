import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from '../../assets/colors';
import searchCategoriesStyles from "../../assets/styles/searchCategories.style";
import userPostData from './userPostData';

const SearchCategories = () => {
        return userPostData.map((item) => (
            <TouchableOpacity style={searchCategoriesStyles.SecondRow} onPress={()=>console.log(item.userName)}>
                <Text style={[searchCategoriesStyles.SecondText,
                { background: 'linear-gradient(to right, ' + colors.green + ', ' + colors.tealGreen + ')' }]}
                >{item.userName}</Text>
            </TouchableOpacity>
        ));
}

export default SearchCategories