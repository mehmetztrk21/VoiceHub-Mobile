import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import colors from "../../assets/colors"

const PostCategories = ({ navigation, username }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("SearchScreen", { uName: username, getCategory: "poem", type: "discovery" })}
                style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}>#</Text>
                <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}>poem </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SearchScreen", { uName: username, getCategory: "sports", type: "discovery" })}
                style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}> #</Text>
                <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}>sports </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SearchScreen", { uName: username, getCategory: "motivation", type: "discovery" })}
                style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}> #</Text>
                <Text style={{ fontSize: 12, fontWeight: "500", color: colors.gray }}>motivation</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PostCategories