import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import colors from '../../assets/colors'
import { useUser } from '../../utils/userContext'
import { blockAccount } from '../../services/actionServices'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DontShowPosts = ({ userId, title }) => {

    const { user, setUser } = useUser();

    const block = async () => {
        await blockAccount({ userId: userId })

        let temp = { ...user };

        if (user?.blockedUsers?.includes(userId)) {
            temp?.blockedUsers?.splice(temp?.blockedUsers?.indexOf(userId), 1);
        }
        else {
            temp?.blockedUsers?.push(userId);
        }

        await AsyncStorage.setItem("user", JSON.stringify(temp));
        setUser(temp);
    }

    return (
        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: 'center', paddingTop: 20 }}>
            {title == "secret" ?
                <Ionicons name={"lock-closed"} size={125} color={colors.white} /> :
                <FontAwesome5 name={"ban"} size={125} color={colors.white} />
            }
            <Text style={{ color: colors.white, fontSize: 24, fontWeight: "700", marginBottom: 15, marginTop: 15, }}>
                {title == "secret" ?
                    "This Profile is Secret Follow Now!" :
                    "You blocked this profile"
                }
            </Text>
        </View>
    )
}

export default DontShowPosts