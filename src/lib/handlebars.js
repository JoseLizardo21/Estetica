const helpersHandlebars = {}
helpersHandlebars.cashRegisterControl = (user)=>{
    if(user === "SuperAdmin" || user === "Administrador"){
        const element = 
        '<li>'+
        '<img src="/imgs/icons/control.svg"'+ 'alt="iconHome"class="iconsNav">'+
        '<a href="#">Control de caja</a>'+
        '</li>';
        return element; 
    }
    return null;
}
helpersHandlebars.bills = (user)=>{
    if(user === "Trabajador" || user === "Administrador"){
        const element = 
            '<li>'+
                '<img src="/imgs/icons/facturas.svg" alt="iconHome"'+ 'class="iconsNav">'+
                '<a href="/billing">Emisión de facturas</a>'+
            '</li>';
        return element; 
    }
    return null;
}
helpersHandlebars.incomeAndExpense = (user)=>{
    if(user === "SuperAdmin" || user === "Administrador"){
        const element = 
            '<li>'+
                '<img src="/imgs/icons/money.svg" alt="iconHome"'+ 'class="iconsNav">'+
                '<a href="#">Ingreso y gasto</a>'+
            '</li>';
        return element; 
    }
    return null;
} 

module.exports = helpersHandlebars;

