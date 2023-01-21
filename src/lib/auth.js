module.exports = {
    isLoggedIn(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        return res.redirect('/');
    },
    isNotLogedIn(req, res, next){
        if(!req.isAuthenticated()){
            return next();
        }
        return res.redirect('/home');
    }
}