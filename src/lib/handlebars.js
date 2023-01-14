const helpersHandlebars = {}
helpersHandlebars.compareUser = (username)=>{
    if(username === "Admin"){
        const element = '<div class="col">'+
        '<a href="/createUsers" class="card btnMenu">'+
            '<div class="w-100 h-100 row ps-3 d-flex align-items-center">'+
                '<img src="/imgs/icons/agregarUsers.png" alt="imagen" class="imgIcons">'+
                '<div class="col d-flex justify-content-center align-items-center fs-3 text-center">'+
                    'Agregar Trabajador'+
                '</div>'+
            '</div>'+
        '</a>'+            
    '</div>';
        return (element)
    }
    return null;
}
module.exports = helpersHandlebars;

