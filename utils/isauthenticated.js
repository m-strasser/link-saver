/**
 * @desc Checks whether the user is authenticated, if not he*she is redirected
 * to the login page.
 */
module.exports = function(req, res, next) {
        if(req.isAuthenticated())
                next();
        else
                res.redirect('/account/login/');
};
