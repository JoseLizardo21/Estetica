const helpersHandlebars = {}
helpersHandlebars.compareUser = (username)=>{
    if(username === "Admin"){
        const element = '<div class="col">'+
            '<a href="/createUsers" class="card bg-white text-center">Agregar trabajador</a>'
        +'</div>';
        return (element)
    }
    return null;
}
module.exports = helpersHandlebars;
