import React from "react"
import { SafeAreaView, ScrollView } from "react-native"

const Blockeds = ({ navigation }) => {
    return (
        <SafeAreaView>
            <OtherHeader navigation={navigation} HeaderTitle={"Blocked Accounts"} isTic={false} />

            <ScrollView style={{ paddingHorizontal: "7.5%", marginTop: "5%", }} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={() => pullThePage()} colors={[colors.green]} />}>
                    
            </ScrollView>
        </SafeAreaView>
    )
}

export default Blockeds