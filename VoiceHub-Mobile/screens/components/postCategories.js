import { View, Text, TouchableOpacity } from "react-native"
import React, { useEffect } from "react"
import colors from "../../assets/colors"

const PostCategories = ({ navigation, username, categories }) => {
    useEffect(() => {
        console.log("categories", categories)
    }, [])
    return (
        <View style={{ flexDirection: "row" }}>
            {
                categories?.map((item, index) => (
                    <TouchableOpacity onPress={() => navigation.navigate("SearchScreen", { uName: username, getCategory: "poem", type: "discovery" })}
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