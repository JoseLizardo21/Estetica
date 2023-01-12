const validation = {
}

validation.Mayusculas = (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password[index] == password[index].toUpperCase()) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

validation.Minusculas = (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password[index] == password[index].toLowerCase()) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

validation.isNumbre = (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password.charCodeAt(index) >= 48 && password.charCodeAt(index) <= 57) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

validation.hayArroba = (password) => {
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
    console.log("llegó", password)
    if (password.length >= 8) {
        if (
            validation.Mayusculas(password) == true &&
            validation.Minusculas(password) == true &&
            validation.isNumbre(password) == true && 
            validation.hayArroba(password) == true
        ) {
            return "Correcto";
        }
        else if ( 
            validation.Mayusculas(password) === false && 
            validation.Minusculas(password) == true && 
            validation.isNumbre(password) == true && 
            validation.hayArroba(password) == true
        ) {
            return "por favor una letra mayuscula";
        } else if (
            validation.Mayusculas(password) === true && 
            validation.Minusculas(password) == false && 
            validation.isNumbre(password) == true && 
            validation.hayArroba(password) == true
        ) {
            return "por favor ingrese una letra minuscula";
        } else if (
            validation.Mayusculas(password) === true && 
            validation.Minusculas(password) == true && 
            validation.isNumbre(password) == false && 
            validation.hayArroba(password) == true
        ) {
            return "por favor ingrese un numero";
        } else if (
            validation.Mayusculas(password) === true && 
            validation.Minusculas(password) == true && 
            validation.isNumbre(password) == true && 
            validation.hayArroba(password) == false
        ) {
            return "por favor ingrese una @";
        } else if (
            validation.Mayusculas(password) === false && 
            validation.Minusculas(password) == true && 
            validation.isNumbre(password) == true && 
            validation.hayArroba(password) == true
        ) {
            return "Ingrese una letra mayuscula";
        } else {
            return "Error de contraseña";
        }
    } else {
        return "Error Logitud";
    }
}

module.exports = validation;