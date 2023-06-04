import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import editCategoriesPopUpStyle from '../../assets/styles/editCategoriesPopUp.style';
import { updatePost } from '../../services/postServices';

const editCategoriesPopUp = ({ categories, setCategories }) => {

    const [newCategory, setNewCategory] = useState("");

    useEffect(() => {
        setNewCategory(concatenatedString);
    }, [])

    const submit = async () => {
        await updatePost({ id: categories[1], categories: (newCategory.split(" ").map(item => item.trim())) });
        setCategories(false);
    }

    const renderItem = (item) => {
        return `${item} `;
    };

    const concatenatedString = categories[0].map(renderItem).join('').replace(/,\s*$/, '');

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={editCategoriesPopUpStyle.container}>

                <Text style={editCategoriesPopUpStyle.title}>Edit Categories</Text>

                <TextInput value={newCategory}
                    style={editCategoriesPopUpStyle.input}
                    onChangeText={(newCategory) => setNewCategory(newCategory)}
                />

                <TouchableOpacity style={{ marginVertical: 10 }} onPress={submit}>
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