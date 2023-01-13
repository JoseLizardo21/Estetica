const helpersHandlebars = {}
helpersHandlebars.compareUser = (username)=>{
    if(username === "Admin"){
        const element = '<div class="col">'+
            '<a href="/createUsers" class="card text-center btnMenu">Agregar trabajador</a>'
        +'</div>';
        return (element)
    }
    return null;
}
module.exports = helpersHandlebars;
