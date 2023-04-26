import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors';

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
        <View style={{
            flex: 1,
            width: "70%",
            alignSelf: "center",
            justifyContent: "center",
        }}>
            <View style={{
                width: "100%",
                alignSelf: "center",
                justifyContent: "center",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
                backgroundColor: colors.green,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 1,
                shadowRadius: 4,
                elevation: 10,
            }}>

                <Text style={{
                    color: colors.white, fontSize: 20, textAlign: "center", fontWeight: "600",
                    marginVertical: 10,
                }}>Edit Categories</Text>

                <TextInput value={newCategory}
                    style={{
                        backgroundColor: "lightgray",
                        borderRadius: 25,
                        paddingHorizontal: 7.5,
                        paddingVertical: 2.5,
                        marginVertical: 10,
                        width: "80%",
                        marginLeft: "8%"
                    }}
                    onChangeText={(newCategory) => setNewCategory(newCategory)}
                />

                <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => { setCategories(false) }}>
                    <Text style={{
                        color: colors.green, fontSize: 16, textAlign: "center", fontWeight: "600",
                        backgroundColor: colors.white, padding: 10, borderRadius: 10,
                    }}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => { setCategories(false) }}>
                    <Text style={{
                        color: colors.green, fontSize: 16, textAlign: "center", fontWeight: "600",
                        backgroundColor: colors.white, padding: 10, borderRadius: 10,
                    }}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default editCategoriesPopUp