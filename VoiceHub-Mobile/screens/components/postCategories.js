import { View, Text, TouchableOpacity } from "react-native"
import React, { useEffect } from "react"
import colors from "../../assets/colors"

const PostCategories = ({ navigation, username, categories }) => {
    return (
        <View style={{ flexDirection: "row" }} index>
            {
                categories?.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate("SearchScreen", { username: username, getCategory: item, type: "discovery" })}
                        style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}>#</Text>
                        <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}>{item} </Text>
                    </TouchableOpacity>
                )
                )
            }
        </View>
    )
}

export default PostCategories