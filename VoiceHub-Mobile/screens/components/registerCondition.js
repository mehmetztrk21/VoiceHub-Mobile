export const registerCondition = (firstName, lastName, userName, email, password1, password2) => {
    if ((firstName, lastName, userName, email, password1, password2) !== "") {
        if (password1 == password2) {
            if (userName.length >= 3) {
                if (password1.length >= 8) {
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
        alert("don't boş bırakma");
    }
}