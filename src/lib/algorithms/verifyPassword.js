const validation = {
}

const Mayusculas = (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password[index] == password[index].toUpperCase()) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

const Minusculas = (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password[index] == password[index].toLowerCase()) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

const isNumber = (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password.charCodeAt(index) >= 48 && password.charCodeAt(index) <= 57) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

existeArroba = (password) => {
    for (let index = 0; index < password.length; index++) {
        if (password.charCodeAt(index) == 64) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}
validation.verifyPassword = (req, password)=>{
    const numCarac = password.length;
    const mayuscula = Mayusculas(password);
    const minuscula = Minusculas(password);
    const numero = isNumber(password);
    const arroba = existeArroba(password);
    
    if(numCarac >= 8){
        if(mayuscula){
            if(minuscula){
                if(numero){
                    if(arroba){
                        return true;
                    }else{
                        req.flash("message", "La contraseña debe de contener al menos una arroba");
                        return false;
                    }
                }else{
                    req.flash("message", "La contraseña debe de contener al menos un número");
                    return false;
                }
            }else{
                req.flash("message", "La contraseña debe de contener una letra minuscula");
                return false;
            }
        }else{
            req.flash("message", "La contraseña debe de contener al menos una letra mayuscula");
            return false;
        }
    }else{
        req.flash("message", "El número de caracteres debe de ser mayor o igual a 8");
        return false;
    }
}   





const ejemplo = (password) => {
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