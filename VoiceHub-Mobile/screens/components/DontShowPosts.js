import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import colors from '../../assets/colors'
import { useUser } from '../../utils/userContext'
import { blockAccount } from '../../services/actionServices'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DontShowPosts = ({ userId, title }) => {

    const { user, setUser } = useUser();

    const block = async () => {
        blockAccount({ userId: userId })

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
            <Icon type={"font-awesome"} name={title == "secret" ? "lock" : "ban"} size={140} color={colors.white} />
            <Text style={{ color: colors.white, fontSize: 24, fontWeight: "700", marginBottom: 15 }}>
                {title == "secret" ?
                    "This Profile is Secret Follow Now!" :
                    "You blocked this profile"
                }
            </Text>

            {title == "blocked" ?
                <TouchableOpacity onPress={block}>
                    <Text style={{
                        color: colors.green, fontSize: 16, textAlign: "center", fontWeight: "700", backgroundColor: colors.white, padding: 10, borderRadius: 10,
                    }}>Unblock User</Text>
                </TouchableOpacity> : null}
        </View>
    )
}

export default DontShowPosts