export const registerCondition = (firstName, lastName, username, email, password1, password2) => {
    if ((firstName, lastName, username, email, password1, password2) !== "") {
        if (password1 == password2) {
            if (username.length >= 1) {
                if (password1.length >= 1) {
                    return true
                }
                else {
                    alert("Password length may be 8 chart");
                }
            }
            else {
                alert("User Name length may be 8 chart");
            }
        }
        else {
            alert("Passwords don't equal");
        }
    }
    else {
        alert("don't empty inputs");
    }
}