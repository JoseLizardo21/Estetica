const validation = {
}

validation.Mayusculas = async (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password[index] == password[index].toUpperCase()) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

validation.Minusculas = async (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password[index] == password[index].toLowerCase()) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

validation.isNumbre = async (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password.charCodeAt(index) >= 48 && password.charCodeAt(index) <= 57) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

validation.hayArroba = async (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password.charCodeAt(index) == 64) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

validation.Letras = async (password) => {
    if (password.length >= 8) {
        console.log(validation.Mayusculas(password));
        console.log(validation.Minusculas(password));
        console.log(validation.isNumbre(password));
        console.log(validation.hayArroba(password));
        switch (password) {
            case 1:
                if (
                    validation.Mayusculas(password) &&
                    validation.Minusculas(password) &&
                    validation.isNumbre(password) && 
                    validation.hayArroba(password)
                ) {
                    return await "Correcto";
                }
        
            default:
                break;
        }
    } else {
        return "Error Logitud";
    }

}

module.exports = validation;