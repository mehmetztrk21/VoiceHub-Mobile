export const registerCondition = (firstName, lastName, username, email, password1, password2, setShowAlert, setAlertMessage) => {
    if ((firstName, lastName, username, email, password1, password2) !== "") {
        if (password1 == password2) {
            if (username.length >= 1) {
                if (password1.length >= 1) {
                    return true
                }
                else {
                    setShowAlert(true);
                    setAlertMessage("Password length may be 8 chart");
                }
            }
            else {
                setShowAlert(true);
                setAlertMessage("User Name length may be 8 chart");
            }
        }
        else {
            setShowAlert(true);
            setAlertMessage("Passwords don't equal");
        }
    }
    else {
        setShowAlert(true);
        setAlertMessage("don't empty inputs");
    }
}