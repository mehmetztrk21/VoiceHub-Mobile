import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors';
import editCategoriesPopUpStyle from '../../assets/styles/editCategoriesPopUp.style';

const editCategoriesPopUp = ({ id, setId, categories, setCategories }) => {

    const [newCategory, setNewCategory] = useState("");

    useEffect(() => {
        setNewCategory(concatenatedString);
    }, [])

    const renderItem = (item) => {
        return `${item}, `;
    };

    const concatenatedString = categories.map(renderItem).join('').replace(/,\s*$/, '');

    return (
        <View style={editCategoriesPopUpStyle.container}>
            <View style={editCategoriesPopUpStyle.cantainer2}>

                <Text style={editCategoriesPopUpStyle.title}>Edit Categories</Text>

                <TextInput value={newCategory}
                    style={editCategoriesPopUpStyle.input}
                    onChangeText={(newCategory) => setNewCategory(newCategory)}
                />

                <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => { setCategories(false) }}>
                    <Text style={editCategoriesPopUpStyle.submit}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => { setCategories(false) }}>
                    <Text style={editCategoriesPopUpStyle.submit}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default editCategoriesPopUp