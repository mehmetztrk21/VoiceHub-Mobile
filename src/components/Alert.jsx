import React from 'react'
import AwesomeAlert from "react-native-awesome-alerts";
import colors from '../../assets/colors';
const Alert = ({ showAlert, setShowAlert, alertMessage }) => {
    return (
        <AwesomeAlert
            show={showAlert}
            showProgress={false}
            message={alertMessage}
            messageStyle={{
                fontSize: 15,
                fontWeight: "500"
            }}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Okay"
            confirmButtonTextStyle={{ textAlign: "center", fontWeight: "600", fontSize: 16 }}
            confirmButtonStyle={{
                backgroundColor: colors.green,
                borderRadius: 30,
                width: "50%",
                marginTop: "5%",
            }}
            contentContainerStyle={{ borderRadius: 20 }}
            onConfirmPressed={() => {
                setShowAlert(false)
            }}
            onDismiss={() => setShowAlert(false)}
        />
    )
}

export default Alert