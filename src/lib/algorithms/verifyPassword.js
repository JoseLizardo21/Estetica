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

validation.Letras = (password) => {
    console.log("llegó", password)
    if (password.length >= 8) {
<<<<<<< HEAD
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
                    return "Correcto";
                }
        
            default:
                break;
=======
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
>>>>>>> 6d8f7000fa6d20840e10348a7616d650ac3de0af
        }
    } else {
        return "Error Logitud";
    }
}

module.exports = validation;