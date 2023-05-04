import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import React from "react"
import colors from "../../assets/colors";
import seeProfilePopUpStyles from "../../assets/styles/seeProfilePopUp.styles";

const seeProfilePopUp = ({ setOpenSeeProfileOptions }) => {
    return (
        <View style={seeProfilePopUpStyles.container}>
            <View style={seeProfilePopUpStyles.container2}>

                <TouchableOpacity onPress={() => { }}
                    style={{ flexDirection: "row", alignItems: "center", marginBottom: 12.5, }}>
                    <Icon size={22} type={"font-awesome"} name={"ban"} color={colors.white} />
                    <Text style={seeProfilePopUpStyles.button}>Block Account</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}
                    style={{ flexDirection: "row", alignItems: "center", }}>
                    <Icon size={22} type={"font-awesome"} name={"share"} color={colors.white} />
                    <Text style={seeProfilePopUpStyles.button}>Share Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => { setOpenSeeProfileOptions(false) }}>
                    <Text style={seeProfilePopUpStyles.closeButton}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default seeProfilePopUp;